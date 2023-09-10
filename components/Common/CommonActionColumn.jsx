import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Col, Popconfirm, Row } from 'antd'
import React from 'react'

const CommonActionColumn = ({onEditRow,extraMoreColumn,onDeleteRow}) => {
  return (
    <Row gutter={[12, 12]} justify={'space-around'}>
          {extraMoreColumn && <Col >
              {extraMoreColumn}
          </Col>}
    <Col >
      <EditOutlined onClick={() => onEditRow()} />
    </Col>
    <Col >
      <Popconfirm
        placement="leftTop"
        title="Delete"
        description="Are you sure to delete this ?"
        okText="Yes"
        onConfirm={() => onDeleteRow()}
        cancelText="No"
      >
        <DeleteOutlined />
      </Popconfirm>
    </Col>
  </Row>
  )
}

export default CommonActionColumn