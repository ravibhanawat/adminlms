import React, { useRef, useState, useEffect } from "react";
import CommonFormField from "../../components/Common/CommonFormField";
import CommonButton from "../../components/Common/CommonButton";
import { Button, Form, message } from "antd";
import { useRouter } from "next/router";
import { getBlogById, registerNewBlog, updateBlog } from "../../service/blogs";
import { getFormattedBlogCategory } from "../../util/commonFunction";
import { getBlogCategory } from "../../service/blogCategory";

const blogForm = () => {
  const formref = useRef();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitalData] = useState({});
  const [blogCategory,setBlogCategory]=useState([])
  const router = useRouter();
  const { id } = router.query;
  console.log("loading", id);
  const formType = id ? "update" : "create";
  console.log("formType", formType);
  useEffect(() => {
    getBlogsCategory()
    if (id) {
      getDetail(id);
    }
  }, [id]);

  const getBlogsCategory = async() => {
    await getBlogCategory().then(({data}) => { 
      const formattedBlogCategory = getFormattedBlogCategory(data?.allBlog, 'title', 'type')
      setBlogCategory(formattedBlogCategory)
    })
  }
  const getDetail = async (id) => {
    setLoading(true);
    try {
      await getBlogById(id).then(({ data }) => {
        console.log(data);
        setInitalData(data?.blog);
        formref.current.setFieldsValue(data?.blog);
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error({
        content: error?.message || "Something went wrong",
        key: "1",
      });
    }
  };

  const formColumn = [
    {
      layout: 24,
      type: "TEXT",
      key:'1',
      label: "Blog Title",
      name: "title",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Enter Blog Title",
      },
    },
    {
      layout: 24,
      key:'2',
      type: "UPLOADER",
      label: "Blog IMAGE",
      name: "title",
      rules: [{ required: true }],
     
    },
    {
      layout: 24,
      type: "SELECT",
      key:'3',
      label: "Blog Type",
      options:blogCategory,
      name: "category",
      rules: [{ required: true}],
      elementProps: {
        placeholder: "Select Blog type",
       
        onInput:e => e.target.value = e.target.value.toUpperCase(),
        style:{
          textTransform: 'uppercase',
        },
      },
    },
    {
      layout: 24,
      type: "EDITOR",
      key:'4',
      label: "Blog Description",
      name: "description",
      rules: [{ required: false }],
      elementProps: {
        elementName:"description",
        formRef: formref,
        // onChange:
      }
     
    },

  ];

  const onSuccess = (value) => {
    console.log(value);

    formref.current.validateFields().then(async (field) => {
      setLoading(true);
      console.log("onSuccess", field);

      try {
        await (formType == "update"
          ? updateBlog(id,{ ...field })
          : registerNewBlog(field)
        ).then(({ data }) => {
          console.log(data);
          router.push("/blog");
          message.success({ content: data?.message, key: "2" });
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        message.error({
          content: error.message || "Something went wrong",
          key: "1",
        });
      }
    });
  };
  return (
    <Form
      ref={formref}
      onFinish={onSuccess}
      size="large"
      initialValues={initialData}
      loading={loading}
    >
      <CommonFormField items={formColumn} />
      <Form.Item>
        <CommonButton htmlType="submit" title="submit" type="primary" />
      </Form.Item>
    </Form>
  );
};

export default blogForm;
