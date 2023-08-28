import React, { useRef, useState, useEffect } from "react";
import CommonForm from "../../components/Common/CommonForm";
import CommonFormField from "../../components/Common/CommonFormField";
import CommonButton from "../../components/Common/CommonButton";
import { Button, Form, message } from "antd";
import {
  getUserById,
  registerNewUser,
  updateUser,
} from "../../service/userService";
import { useRouter } from "next/router";

const userForm = () => {
  const formref = useRef();
  const [loading, setLoading] = useState(false);
  const [initialData, setInitalData] = useState({});
  const router = useRouter();
  const { id } = router.query;
  console.log("loading", id);
  const formType = id ? "update" : "create";
  console.log("formType", formType);
  useEffect(() => {
    if (id) {
      getUserDetail(id);
    }
  }, [id]);

  const getUserDetail = async (id) => {
    setLoading(true);
    try {
      await getUserById(id).then(({ data }) => {
        console.log(data);
        setInitalData(data?.getProfile);
        formref.current.setFieldsValue(data?.getProfile);
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error({
        content: error?.message || "Something went wrong",
        key: "1",
      });
    }
  };

  const formColumn = [
    {
      layout: 12,
      type: "TEXT",
      label: "First Name",
      name: "firstname",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Enter your first name",
      },
    },
    {
      layout: 12,
      type: "TEXT",
      label: "Last Name",
      name: "lastname",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Enter your last name",
      },
    },
    {
      layout: 24,
      type: "TEXT",
      label: "Email",
      name: "email",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: example@example.com",
      },
    },
    {
      layout: 24,
      type: "TEXT",
      label: "Profession",
      name: "profession",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: student",
      },
    },
    {
      layout: 24,
      type: "NUMBER",
      label: "Mobile",
      name: "mobile",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: 123456789",
      },
    },
    {
      layout: 24,
      type: "SELECT",
      label: "Role",
      name: "role",
      options: [
        {
          label: "USER",
          value: "USER",
        },
        {
          label: "ADMIN",
          value: "admin",
        },
        {
          label: "INSTRUCTURE",
          value: "INSTRUCTURE",
        },
        {
          label: "STUDENT",
          value: "STUDENT",
        },
      ],
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: USER",
      },
    },
    {
      layout: 24,
      type: "PASSWORD",
      label: "Password",
      name: "password",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: ********",
      },
    },
  ];

  const onSuccess = (value) => {
    console.log(value);

    formref.current.validateFields().then(async (field) => {
      setLoading(true);
      console.log("onSuccess", field);

      try {
        await (formType == "update"
          ? updateUser({ ...field, _id: id })
          : registerNewUser(field)
        ).then(({ data }) => {
          console.log(data);
          router.push("/usermanage");
          message.success({ content: data?.message, key: "2" });
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        message.error({
          content: error.message || "Something went wrong",
          key: "1",
        });
      }
    });
  };
  return (
    <Form
      ref={formref}
      onFinish={onSuccess}
      size="large"
      initialValues={initialData}
      loading={loading}
    >
      <CommonFormField items={formColumn} />
      <Form.Item>
        <CommonButton htmlType="submit" title="submit" type="primary" />
      </Form.Item>
    </Form>
  );
};

export default userForm;
