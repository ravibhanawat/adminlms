import { Button } from "antd";
import React from "react";

const CommonButton = ({ title, ...rest }) => {
  return <Button {...rest}>{title}</Button>;
};

export default CommonButton;
