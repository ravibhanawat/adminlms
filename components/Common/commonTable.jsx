import React, { useState } from 'react'
import { Button, Descriptions, Input, Space, Table, Typography } from 'antd';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { isEmpty } from 'lodash';
import './Common.module.css'

// interface commonDealerProps {
//   rows: Array<any>;
//   columns: Array<any>;
//   type?: string;
//   title: string;
//   loading: boolean;
//   onRowClick?: (data:any) => void;
//   selectedRow?: Array<any>;
//   selectedCol?: Array<any>;
//   pagination?: object;
//   extra?: Array<any>;
//   rowSelection?: object;
//   onChange?: (data: any) => void;
//   onSearchList?: (data: any) => void;
//   search?: boolean;
//   extraHeader?:React.ReactNode

// }

const CommonTable = ({ rows, columns, type, title, loading, onRowClick, selectedRow, selectedCol, pagination, extra, rowSelection, onChange, onSearchList = () => null, search = true, extraHeader }) => {
  
  return (
    <>
      {!isEmpty(extraHeader) && extraHeader}
{type == 'Line' && <Descriptions style={{ padding: '1%', backgroundColor: 'white' }} className='prdesc' column={3} size={"default"}>
        {!isEmpty(selectedRow) && selectedRow?.map((r, index) => {
        
          return (
            <React.Fragment key={`pr_page_des_${r.column_id}`}>
              <Descriptions.Item contentStyle={{ textTransform: 'capitalize' }} label={String(r.title)}>{typeof r?.value == 'object' ? r?.value?.value:r?.value || "--"}</Descriptions.Item>
            </React.Fragment>)
        })}
              
      </Descriptions>}
  
    <Table
      columns={columns}
      onChange={onChange}
      onRow={onRowClick}
      rowClassName='dealer_table_row'
      size="medium"
      rowKey="key"
      scroll={{ x: columns.length * 180 }}
        sticky
        bordered
      rowSelection={rowSelection}
      tableLayout="fixed"
      className='dealer_table'
      dataSource={rows}
      loading={loading}
        pagination={{
          ...pagination,
      onShowSizeChange:onChange
    }}
        />
        
      </>
  )
}

export default CommonTable