import React, { useRef, useState, useEffect } from "react";
import CommonForm from "../../components/Common/CommonForm";
import CommonFormField from "../../components/Common/CommonFormField";
import CommonButton from "../../components/Common/CommonButton";
import {  Form, Spin, message } from "antd";
 
import { useRouter } from "next/router";
import { CreateAExam, allExambycategory, getaExam, updateExam } from "../../service/examService";
import { getCourse, } from "../../service/course";

const ExamForm = () => {
  const formref = useRef();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitalData] = useState({});
  const [course,setCourse] = useState([])
  const [category,setCategory] = useState()
  const router = useRouter();
  const { id } = router?.query;
  // console.log("loading", id);
  const formType = id ? "update" : "create";
  // console.log("formType", formType);
  useEffect(() => {
    if (id) {
      getUserDetail(id);
    }
   
  }, [id]);
  useEffect(()=>{
    getCat()
  },[])


  const getCat =async()=>{
    try{
      // await allExambycategory().then(({data})=>{
      //   setCategory([...data.data.map((r)=>{return {value:r._id,label:r.title}})])
      //  }) 
      await  getCourse().then(({data})=>{
        setCourse([...data.data.map((r)=>{return {value:r._id,label:r.title}})])
      })
    }catch(err){

    }
  }

  const getUserDetail = async (id) => {
    setLoading(true);
    try {
       
      await getaExam(id).then(({ data }) => {
        console.log(data?.data );
        setInitalData({...data?.data,course:data?.data?.course?.map((r)=>{return r?._id})});
        formref?.current?.setFieldsValue({...data?.data,course:data?.data?.course?.map((r)=>{return r?._id})});
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
      label: "Title",
      name: "title",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Please enter title here",
      },
    },
    {
      layout: 24,
      type: "EDITOR",
      label: "Description",
      name: "description",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Please enter description here",
        elementName:"description",
        formRef: formref,
      },
     
    },
    {
      layout: 24,
      type: "TEXT",
      label: "info",
      name: "info",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Please enter info here",
      },
    },
    {
      layout: 24,
      type: "NUMBER",
      label: "price",
      name: "price",
      rules: [{ required: true }],
      
    },
    {
      layout: 24,
      type: "DOCUMENTS",
      label: "Image",
      name: "image",
      elementProps:{
        type:"exam",
        maxCount:1
      }
    //   rules: [{ required: true }],
      
    },
    // {
    //   layout: 24,
    //   type: "SELECT",
    //   label: "Category",
    //   name: "category",
    //   options: category??[],
    //   rules: [{ required: true }],
    //   elementProps: {
    //     placeholder: "Eg: 123456789",
    //   },
    // },
    {
      layout: 6,
      type: "CHECKBOX",
      label: "paid",
      name: "paid",
       
    //   rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: USER",
      },
    },
    {
      layout: 24,
      type: "SELECT",
      label: "Course",
      name: "course",
      options:course,
      multiple:true,
      elementProps:{
        mode:"multiple"
      }
    
    },
  ];
  if(loading){
    return <Spin />
  }
  const onSuccess = (value) => {
    console.log(value);

    formref.current.validateFields().then(async (field) => {
      setLoading(true);
      console.log("onSuccess", field);

      try {
        await (formType == "update"
          ? updateExam({ ...initialData,...field })
          : CreateAExam(field)
        ).then(({ data }) => {
          // console.log(data);
          router.push("/exam");
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

export default ExamForm;
