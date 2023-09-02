import React, { useState, useEffect, useRef } from "react";
import { Space, Table, Tag, message, Button, Row, Image,Col, Popconfirm, Modal,Form,List,Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import CommonFormField from "../../components/Common/CommonFormField";
import CommonButton from "../../components/Common/CommonButton";
 
import { useRouter } from "next/router";
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";

import { allCoursebycategory, aCoursebycategory,updateaCoursebycategory,deleteaCoursebycategory,posteaCoursebycategory } from "../../service/course";
import CommaonList from "../../components/Common/commaonList";
import { posteaExambycategory, updateaExambycategory } from "../../service/examService";
// import Image from "next/image";
const ExamCat = () => {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitalData] = useState({});
    const [edit,setEdit] = useState(false)
  const [open,setopen]= useState(false)
  
   const formref = useRef() 
   const [data,setData] = useState([])
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    setLoading(true);
    try {
      await allExambycategory().then(({ data }) => {
        console.log(data);
        setData(data?.data??[]);
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
  const onSuccess = (value) => {
    console.log(value);

    formref.current.validateFields().then(async (field) => {
      setLoading(true);
      console.log("onSuccess", field);

      try {
        await (edit ?
          updateaExambycategory({ ...initialData,...field })
          : posteaExambycategory(field)
        ).then(( item ) => {
          let ls = item.data
          // console.log("postCourseCateg",data)
            if(edit){
                let index = data.findIndex(r=>r._id ===initialData._id)
                data[index] = {...data[index],...field}
                setData([...data])
            }else{
              setData([...data,...ls.data])
            }
          console.log(data);
          setEdit(false);
          setopen(false)
          formref.current.resetFields()
          setInitalData({})
        //   router.push("/usermanage");
          message.success({ content: data?.message, key: "2" });
        });
        setLoading(false);
      } catch (error) {
        setEdit(false);
        setopen(false)
        setInitalData({})
        setLoading(false);
        message.error({
          content: error.message || "Something went wrong",
          key: "1",
        });
      }
    });
  };

 
  
  const formColumn = [{
    layout: 24,
    type: "TEXT",
    label: "Title",
    name: "title",
    rules: [{ required: true }],
    elementProps: {
      placeholder: "Please enter title here",
    },
  },]

 
  const onAddRow = (data) => {
    console.log(data)
    if(data){
        formref?.current?.setFieldsValue(data)
        setInitalData(data)
        setEdit(true)
    }else{
      formref.current?.resetFields()
        setEdit(false)
        setInitalData({})
    }
    setopen(true)
    // router.push({ pathname: "/course/courseForm", query: { ...data } });
  };
  const onCancel =()=>{
    setEdit(false);
    setInitalData({})
    setopen(false)
    formref.current.resetFields()
  }

  const _getExtraHeader = () => {
    return <Button onClick={() => onAddRow()}> Add New</Button>;
  };
  return (
    // <Table dataSource={dataSource} columns={columns}  bordered  className='dealer_table'/>
    <>
  {/* <CommaonList addIcon={_getExtraHeader} />  */}
    
    {_getExtraHeader()}
    <List
     grid={{ gutter: 16, column: 6 }}
     loading={loading}
     dataSource={data}
        renderItem={(item,index)=>{
            console.log(item)
            return (<List.Item key={index}><Card
                actions={[
                    // <SettingOutlined key="setting" />,
                    <EditOutlined onClick={()=>onAddRow(item)} key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
            >{item.title}</Card></List.Item>)
        }}
    />
    <Modal onCancel={onCancel} footer={null} open={open}>
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
    </Modal>
    </>
  );
};

export default ExamCat;
