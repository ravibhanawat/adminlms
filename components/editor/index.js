import React, { forwardRef, useState } from "react";
import CKEditor from "react-ckeditor-component";
import { Card } from "antd";
import "./index.css";

const CK = ({ elementName, formRef }) => {

//  const value =formRef.current.getFieldValue(elementName)
//   const [content, setContent] = useState(value);

  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    console.log(newContent,elementName);
    // setContent(newContent);
    formRef.current.setFieldValue(elementName,newContent);
    console.log(formRef.current.getFieldsValue());


  };

  const onBlur = (evt) => {
    // Your onBlur logic here
  };

  const afterPaste = (evt) => {
    // Your afterPaste logic here
  };

  return (
    // <Card className="gx-card" title={<IntlMessages id="sidebar.editors.CKEditor"/>}>
    <CKEditor
      activeClass="p10"
      content={formRef?.current?.getFieldValue(elementName)}
    
      
      events={{
        blur: onBlur,
        afterPaste: afterPaste,
        change: onChange,
      }}
    />
    // </Card>
  );
};

export default CK;

