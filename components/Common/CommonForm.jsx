import { Form } from "antd";
import React from "react";
import CommonFormField from "./CommonFormField";
import "./Common.module.css";
import CommonButton from "./CommonButton";

const CommonForm = ({ columns, disabled, initialValue }) => {
  const onSuccess = (data) => {
    console.Console.log(data);
  };
  return (
    <Form
      ref={ref}
      onFinish={onSuccess}
      disabled={disabled}
      initialValues={initialValue}
      size="large"
    >
      <CommonFormField items={columns} />
      <CommonButton type="submit" title="submit" />
    </Form>
  );
};

export default CommonForm;
