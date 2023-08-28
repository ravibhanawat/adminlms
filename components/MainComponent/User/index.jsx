import React,{useState,useEffect} from 'react'
import { Space, Table, Tag } from 'antd';
import './User.module.css'
import CommonDealer from '../../Common/commonTable'
import { debounce } from 'lodash'
import { httpClient } from '../../../util/Api';

const UserManage = () => {
  const [loading,setLoading] = useState(false)
  const [pagination,setPagination] = useState({})

  useEffect(() => {
  getUsers()
  }, [])

  const getUsers = () => {
    httpClient.get('user/allusers').then(data => { 
    console.log(data)
    })
  }
  
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      align:"center"
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      align:"center"
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      align:"center"
    },
  ];

  const onSearch = (val) => {
   
  }
  const onChange = (val) => {
   
  }
  const onClickRow = (data) => {
    
  }
  return (
    // <Table dataSource={dataSource} columns={columns}  bordered  className='dealer_table'/>
    <CommonDealer rows={dataSource} columns={columns} title={`Dispatch Header`} onSearchList={debounce(onSearch,500)} loading={loading} onRowClick={(data)=>onClickRow(data)} pagination={pagination} onChange={onChange} />

  )
}

export default UserManage