import React, { useState, useEffect } from "react";
import { Space, Table, Tag, message, Button, Row, Image,Col, Popconfirm } from "antd";
import "./exam.module.css";
import CommonDealer from "../../Common/commonTable";
import { debounce } from "lodash";
import { httpClient } from "../../../util/Api";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { deleteCourse, getCourse } from "../../../service/course";
import { deleteExam, getExam } from "../../../service/examService";
// import Image from "next/image";
const ExamManage = () => {
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
      await getExam().then(({ data }) => {
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
    onAddRow({ id: Row?.title });
  };

  const onDeleteRow = async (Row) => {
    // console.log("onDeleteRow", Row);
    try {
      await deleteExam(Row?._id).then(({ data }) => {
        console.log(data);
        setRows(rows.filter((row) => row?._id !== Row?._id));

        message.success({
          content: data?.message || "Something went wrong",
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
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
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
      render:(_,item)=>{
        return(<Image width={50} height={50} src={item.image} />)
      }
    },
    {
      title: "category",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "published",
      dataIndex: "published",
      key: "published",
      align: "center",
    },
    {
      title: "paid",
      dataIndex: "paid",
      key: "paid",
      align: "center",
    },
    
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (item, data) => {
        return (
          <Row gutter={[12, 12]}>
            <Col span={8}>
              <MoreOutlined />
            </Col>
            <Col span={8}>
              <EditOutlined onClick={() => onEditRow(data)} />
            </Col>
            <Col span={8}>
              <Popconfirm
                placement="leftTop"
                title="Delete the task"
                description="Are you sure to delete this task?"
                okText="Yes"
                onConfirm={() => onDeleteRow(data)}
                cancelText="No"
              >
                <DeleteOutlined />
              </Popconfirm>
            </Col>
          </Row>
        );
      },
    },
  ];

  const onSearch = (val) => {};
  const onChange = (val) => {};
  const onAddRow = (data) => {
    router.push({ pathname: "/exam/examForm", query: { ...data } });
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

export default ExamManage;
