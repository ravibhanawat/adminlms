import React,{useState,useEffect} from 'react'
import { useRouter } from "next/router";
import { getMaterial } from '../../../service/material';
import { Button, Col, Row, Tooltip, message } from 'antd';
import CommonDealer from "../../Common/commonTable";
import { EditOutlined, EyeFilled } from '@ant-design/icons';
import { debounce } from "lodash";
 

const Material = () => {
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
          await getMaterial().then(({ data }) => {
            console.log(data);
            setRows(data?.data);
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
        }
      ];
      const onSearch = (val) => {};
      const onChange = (val) => {};
      const onAddRow = (data) => {
        router.push({ pathname: "/material/materialForm", query: { ...data } });
      };
    
      const _getExtraHeader = () => {
        return <Button onClick={() => onAddRow()}> Add New</Button>;
      };
  return (
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
  )
}

export default Material