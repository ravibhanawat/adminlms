import React, { useState, useEffect } from "react";
import { Space, Table, Tag, message, Button, Row, Col, Popconfirm } from "antd";
import "./Blog.module.css";
import CommonDealer from "../../Common/commonTable";
import { debounce } from "lodash";
import { httpClient } from "../../../util/Api";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { deleteUser, getUser } from "../../../service/userService";
import CommonActionColumn from "../../Common/CommonActionColumn";
import { deleteBlogCategory, getBlogCategory } from "../../../service/blogCategory";
import moment from "moment";

const BlogCategory = () => {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const [rows, setRows] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    setLoading(true);
    try {
      await getBlogCategory().then(({ data }) => {
        console.log(data);
        setRows(data?.allBlog);
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
      await deleteBlogCategory(Row?._id).then(({ data }) => {
        console.log(data);
        let filteredRows = rows.filter(r=>r._id !== Row._id)
        // rows[index] ={...rows[index],isDeleted:true}
        setRows(filteredRows)
        // setRows(rows.filter((row) => row?._id !== Row?._id));

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
      title: 'S.NO.',
      dataIndex: 'key',
      rowScope: 'row',
      width: 70,
      render: (data, all, index) => {
        return index+1
      }
    },
    {
      title: "Blog Title",
      dataIndex: "title",
      key: "title",
      align: "center",
    },
    {
      title: "Blog Type",
      dataIndex: "type",
      key: "type",
      align: "center",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (item, data) => {
        return moment(item).format('DD-MM-YYYY hh:mm:ss')
      },
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

  const onSearch = (val) => {};
  const onChange = (val) => {};
  const onAddRow = (data) => {
    router.push({ pathname: "/blogCategory/blogCategoryForm", query: { ...data } });
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

export default BlogCategory;
