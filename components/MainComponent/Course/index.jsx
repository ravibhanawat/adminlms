import React, { useState, useEffect } from "react";
import { Space, Table, Tag, message, Button, Row, Image,Col, Popconfirm, Spin } from "antd";
import "./course.module.css";
import CommonDealer from "../../Common/commonTable";
import { debounce } from "lodash";
import { httpClient } from "../../../util/Api";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { deleteCourse, getCourse } from "../../../service/course";
import CommonActionColumn from "../../Common/CommonActionColumn";
// import Image from "next/image";
const CourseManage = () => {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const [rows, setRows] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    setLoading(true);
    try {
      await getCourse().then(({ data }) => {
        console.log(data);
        setRows(data?.data??[]);
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

  const onEditRow = (Row) => {
    console.log("onEditRow", Row);
    onAddRow({ id: Row?._id });
  };

  const onDeleteRow = async (Row) => {
    console.log("onDeleteRow", Row);
    try {
      await deleteCourse(Row?._id).then(({ data }) => {
        console.log(data);
        setRows(rows.filter((row) => row?._id !== Row?._id));

        message.success({
          content: data?.message || "Delete success",
          key: "1",
        });
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

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    // {
    //   title: "description",
    //   dataIndex: "description",
    //   key: "description",
    //   align: "center",
    //   render:(_,item)=>{
    //     return(<div key={item._id} dangerouslySetInnerHTML={{__html:item.description}} />)
    //   }
    // },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render:(_,item,index)=>{
        // console.log(item)
        return(
          <div key={index} >
            { item?.image?.map?.((r,index)=>{
              return (<Image width={50} height={50} src={r?.fileUrl} />)
            }) ?? undefined }
         
          </div>
      )}
    },
    // {
    //   title: "category",
    //   dataIndex: "category",
    //   key: "category",
    //   align: "center",
    // },
    // {
    //   title: "published",
    //   dataIndex: "published",
    //   key: "published",
    //   align: "center",
    // },
    {
      title: "paid",
      dataIndex: "paid",
      key: "paid",
      align: "center",
      render:(_,item,index)=>{
        console.log(item)
        return(
          <div key={index} >
             {item.paid ? "Yes":"No"}
         
          </div>
      )}
    },
    
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (item, data) => {
        return (
          <CommonActionColumn onEditRow={()=>onEditRow(data)} onDeleteRow={()=>onDeleteRow(data)} extraMoreColumn={''} />

        );
      },
    },
  ];
  if(loading){
    return <Spin />
  }

  const onSearch = (val) => {};
  const onChange = (val) => {};
  const onAddRow = (data) => {
    router.push({ pathname: "/course/courseForm", query: { ...data } });
  };

  const _getExtraHeader = () => {
    return <Button onClick={() => onAddRow()}> Add New</Button>;
  };
  return (
    // <Table dataSource={dataSource} columns={columns}  bordered  className='dealer_table'/>
    <CommonDealer
      rows={rows}
      columns={columns}
      title={`Dispatch Header`}
      extraHeader={_getExtraHeader()}
      onSearchList={debounce(onSearch, 500)}
      loading={loading}
      pagination={pagination}
      onChange={onChange}
    />
  );
};

export default CourseManage;
