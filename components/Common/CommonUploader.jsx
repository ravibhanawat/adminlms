import React,{useState} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { httpClient, url } from '../../util/Api';
import {deleteAttachment} from "../../service/blogs";

const fileList = [];

const CommonUpload = ({children,onChange,type,...item}) => {
  console.log(item)
  const [fileList,setfileList] = useState(item?.value ??[])
  const [loading, setLoading] = useState(false);
  const onDeleteAttach = (file) => {
    console.log('delete',file)
    const r = confirm('are you sure to delete?');
    if (r) {
      deleteAttachment(file?.response)
      .then(() => {
      return 
      });
      return true;
    } else {
      return false;
    }
  };
  const props = {
    name: "file",
    onChange: info => {


      if (info.file.status === 'uploading') {
          setLoading(true);
          return;
      }
      if (info.file.status === 'done') {
          console.log(info)
          const fileList = info?.fileList?.map((r)=>{return{name: r.name,fileUrl:r.response.fileUrl,uid:r.uid,status:r.status,filePath:r.filePath}})    
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
      // fileList={item?.value}
      defaultFileList={item?.value}
      onRemove={onDeleteAttach}
      className="upload-list-inline"
    >
      
      {/* <Button icon={<UploadOutlined />}>Upload</Button> */}
      {
        children && React.isValidElement(children) ? children : <Button icon={<UploadOutlined />}>Upload</Button>
      }
    </Upload>
  </>
)};

export default CommonUpload;