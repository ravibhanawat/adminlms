import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { httpClient } from '../../util/Api';


const fileList = [];

const CommonUpload = () => (
  <>
    
    
    <br />
    <Upload
      action={`${httpClient}/fileUpload`}
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  </>
);

export default CommonUpload;