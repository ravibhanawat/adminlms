import React,{useState} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { httpClient, url } from '../../util/Api';


const fileList = [];

const CommonUpload = ({onChange,type,...item}) => {
  console.log(item)
  const [loading, setLoading] = useState(false);
 
  const props = {
    name: "file",
    onChange: info => {


      if (info.file.status === 'uploading') {
          setLoading(true);
          return;
      }
      if (info.file.status === 'done') {
          console.log(info)
          const fileList = info?.fileList?.map((r)=>{return{name: r.name,fileUrl:r.response.fileUrl,uid:r.uid,status:r.status}})    
          onChange?.(fileList)

          setLoading(false);
          return
      }
  },
  }
  
  
  return(
  <>
    
    
    <br />
    <Upload
      {...item}
      action={`${url}/fileUpload?type=${type?type:"files"}`}
      method='POST'
      listType="picture"
      {...props}
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  </>
)};

export default CommonUpload;