import React,{useState,useEffect} from 'react'
import { useRouter } from "next/router";
import { deleteMaterial, getMaterial } from '../../../service/material';
import { Button, Col, Row, Tooltip, message } from 'antd';
import CommonDealer from "../../Common/commonTable";
import { EditOutlined, EyeFilled } from '@ant-design/icons';
import { debounce } from "lodash";
import CommonActionColumn from '../../Common/CommonActionColumn';
 

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
      const onAddRow = (data) => {
        router.push({ pathname: "/material/materialForm", query: { ...data } });
      };
      const onEditRow = (Row) => {
        console.log("onEditRow", Row);
        onAddRow({ id: Row?._id });
      };


      const onDeleteRow = async (Row) => {
        console.log("onDeleteRow", Row);
        try {
          await deleteMaterial(Row?._id).then(({ data }) => {
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
          title: "title",
          dataIndex: "title",
          key: "title",
          align: "center",
        },
        {
          title: "type",
          dataIndex: "type",
          key: "type",
          align: "center",
        },
        {
          title: "status",
          dataIndex: "status",
          key: "status",
          align: "center",
          render:(_,data,index)=>{
            return <div key={index}>{data.status ? "Active" : "Deactive"}</div>
          }
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          align: "center",
          render: (item, data) => {
            return (
              <CommonActionColumn onEditRow={()=>onEditRow(data)} onDeleteRow={()=>onDeleteRow(data)} extraMoreColumn={''} />
                )}
        },
        
      ];
      const onSearch = (val) => {};
      const onChange = (val) => {};
      
    
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