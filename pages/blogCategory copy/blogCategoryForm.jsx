import React, { useRef, useState, useEffect } from "react";
import CommonForm from "../../components/Common/CommonForm";
import CommonFormField from "../../components/Common/CommonFormField";
import CommonButton from "../../components/Common/CommonButton";
import { Button, Form, message } from "antd";
import {
  getUserById,
  registerNewUser,
  updateUser,
} from "../../service/userService";
import { useRouter } from "next/router";
import { getBlogCategoryById, registerNewBlogCategory, updateBlogCategory } from "../../service/blogCategory";

const blogCategoryForm = () => {
  const formref = useRef();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitalData] = useState({});
  const router = useRouter();
  const { id } = router.query;
  console.log("loading", id);
  const formType = id ? "update" : "create";
  console.log("formType", formType);
  useEffect(() => {
    if (id) {
      getDetail(id);
    }
  }, [id]);

  const getDetail = async (id) => {
    setLoading(true);
    try {
      await getBlogCategoryById(id).then(({ data }) => {
        console.log(data);
        setInitalData(data?.getABlog);
        formref.current.setFieldsValue(data?.getABlog);
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
      label: "Blog Title",
      name: "title",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Enter Blog Title",
      },
    },
    {
      layout: 24,
      type: "TEXT",
      label: "Blog Type",
      name: "type",
      rules: [{ required: true}],
      elementProps: {
        placeholder: "Enter type",
        onInput:e => e.target.value = e.target.value.toUpperCase(),
        style:{
          textTransform: 'uppercase',
        },
      },
    },
  ];

  const onSuccess = (value) => {
    console.log(value);

    formref.current.validateFields().then(async (field) => {
      setLoading(true);
      console.log("onSuccess", field);

      try {
        await (formType == "update"
          ? updateBlogCategory(id,{ ...field })
          : registerNewBlogCategory(field)
        ).then(({ data }) => {
          console.log(data);
          router.push("/blogCategory");
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

export default blogCategoryForm;
