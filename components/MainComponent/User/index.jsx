import React, { useState, useEffect } from "react";
import { Space, Table, Tag, message, Button, Row, Col, Popconfirm } from "antd";
import "./User.module.css";
import CommonDealer from "../../Common/commonTable";
import { debounce } from "lodash";
import { httpClient } from "../../../util/Api";
import { useRouter } from "next/router";
import { DeleteOutlined, EditOutlined, MoreOutlined, ReloadOutlined } from "@ant-design/icons";
import { deleteUser, getUser } from "../../../service/userService";

const UserManage = () => {
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const [rows, setRows] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    try {
      await getUser().then(({ data }) => {
        console.log(data);
        setRows(data?.allUser);
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
      await deleteUser(Row).then(({ data }) => {
        console.log(data);
        let index = rows.findIndex(r=>r._id ==Row._id)
        rows[index] ={...rows[index],isDeleted:!Row.isDeleted}
        setRows([...rows])
        // setRows(rows.filter((row) => row?._id !== Row?._id));

        message.success({
          content: data?.message || "Something went wrong",
          key: "1",
        });
      });
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
      message.error({
        content: error?.message || "Something went wrong",
        key: "1",
      });
    }
  };

  const columns = [
    {
      title: "firstname",
      dataIndex: "firstname",
      key: "firstname",
      align: "center",
    },
    {
      title: "lastname",
      dataIndex: "lastname",
      key: "lastname",
      align: "center",
    },
    {
      title: "mobile",
      dataIndex: "mobile",
      key: "mobile",
      align: "center",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "roles",
      dataIndex: "roles",
      key: "roles",
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
            {!data.isDeleted ? <Col span={8}>
              <Popconfirm
                placement="leftTop"
                title="Delete the User"
                description="Are you sure to delete this User?"
                okText="Yes"
                onConfirm={() => onDeleteRow(data)}
                cancelText="No"
              >
                <DeleteOutlined />
              </Popconfirm>
            </Col>:
            <Col span={8}>
            <Popconfirm
              placement="leftTop"
              title="Revoke this User"
              description="Are you sure to Revoke this User?"
              okText="Yes"
              onConfirm={() => onDeleteRow(data)}
              cancelText="No"
            >
              <ReloadOutlined />
            </Popconfirm>
          </Col>
            }
          </Row>
        );
      },
    },
  ];

  const onSearch = (val) => {};
  const onChange = (val) => {};
  const onAddRow = (data) => {
    router.push({ pathname: "/usermanage/userForm", query: { ...data } });
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

export default UserManage;
