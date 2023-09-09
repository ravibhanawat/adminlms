import { Form, Spin, message } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import CommonFormField from "../../components/Common/CommonFormField";
import CommonButton from "../../components/Common/CommonButton";
import {CreateAMaterial, getaMaterial, updateMaterial} from "../../service/material"
import { useRouter } from 'next/router';
const materialForm = () => {
    const formref = useRef<any>();
    const [loading,setLoading]= useState(false)
    const [initialData,setInitalData]= useState({})
    const router = useRouter()
    const { id } = router.query;
  const formType = id ? "update" : "create";

    useEffect(() => {
        if (id) {
            getUserDetail(id);
        }
       
      }, [id]);


  const getUserDetail = async (id) => {
    setLoading(true);
    try {
       
      await getaMaterial(id).then(({ data }) => {
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
    const onSuccess = (fields)=>{
        formref?.current?.validateFields().then(async (field) => {
            setLoading(true);
            console.log("onSuccess", field);
      
            try {
              await (formType == "update"
                ? updateMaterial({ ...initialData,...field })
                : CreateAMaterial(field)
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

    }
    const formColumn=[
        {
            layout:12,
            type:"TEXT",
            label:'Title',name:'title', 
            rules: [{ required: true }],
      elementProps: {
        placeholder: "Please enter title here",
      },
        },
        {
            layout:12,
            type:"SELECT",
            label:'Type',name:'type', 
            rules: [{ required: true }],
      elementProps: {
        // placeholder: "Please enter title here",
      },
        },
        {
            layout:12,
            type:"DOCUMENTS",
            label:'files',name:'files', 
            rules: [{ required: true }],
      elementProps: {
        // placeholder: "Please enter title here",
      },
        },
        {
            layout:12,
            type:"SWITCH",
            label:'Status',name:'status', 
            rules: [{ required: true }],
      elementProps: {
        defaultChecked:true
      },
        },
    ]

    if(loading){
        return <Spin />
    }
  return (
    <Form
    ref={formref}
    onFinish={onSuccess}
    size="large"
    initialValues={initialData}
     
  >
    <CommonFormField items={formColumn} />
    <Form.Item>
      <CommonButton htmlType="submit" title="submit" type="primary" />
    </Form.Item>
  </Form>
  )
}

export default materialForm