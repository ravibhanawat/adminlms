import React, { useRef, useState, useEffect } from "react";
import CommonForm from "../../components/Common/CommonForm";
import CommonFormField from "../../components/Common/CommonFormField";
import CommonButton from "../../components/Common/CommonButton";
import {  Form, Spin, message } from "antd";
 
import { useRouter } from "next/router";
import { CreateAsubject,getasubject,deletesubject,updatesubject } from "../../service/subjectService";
import { getMaterial } from "../../service/material";

const SubjectForm = () => {
  const formref = useRef();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitalData] = useState({});
  const [material,setMaterial] = useState()
  const router = useRouter();
  const { id } = router.query;
  
  const formType = id ? "update" : "create";
  
  useEffect(() => {
    if (id) {
      getUserDetail(id);
    }
   
  }, [id]);
   
  useEffect(()=>{
    try{

      getMaterial().then((res)=>{
        console.log(res)
        setMaterial(res?.data?.data?.map((r)=>{return {value:r._id,label:r.title}})??[])
      })
    }catch(error){
      throw new Error(error)
    }
  },[])

   

  const getUserDetail = async (id) => {
    setLoading(true);
    try {
      
      await getasubject(id).then(({ data }) => {
        console.log(data);
        setInitalData(data?.data);
        formref?.current?.setFieldsValue(data?.data);
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
        elementName:"description",
        formRef: formref,
        // onChange:
      }
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
      name: "IMAGE",
    //   rules: [{ required: true }],
      
    },
   
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
      label: "Material",
      name: "material",
      options:material,
      multiple:true,
      elementProps:{
        mode:"multiple"
      }
    
    },
    
  ];

  const onSuccess = (value) => {
    // console.log(value);

    formref.current.validateFields().then(async (field) => {
      setLoading(true);
      console.log("onSuccess", field);

      try {
        await (formType == "update"
          ? updatesubject({ ...initialData,...field })
          : CreateAsubject(field)
        ).then(({ data }) => {
          // console.log(data);
          router.push("/subject");
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

  if(loading){
    return <Spin />
  }
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

export default SubjectForm;
