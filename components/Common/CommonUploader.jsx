import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';


const fileList = [];

const CommonUpload = () => (
  <>
    
    
    <br />
    <Upload
      action="https://api.hoicko.com/fileUpload"
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  </>
);

export default CommonUpload;