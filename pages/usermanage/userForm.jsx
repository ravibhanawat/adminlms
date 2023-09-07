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
      layout: 6,
      type: "TEXT",
      label: "First Name",
      name: "firstname",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Enter your first name",
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "Last Name",
      name: "lastname",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Enter your last name",
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "Email",
      name: "email",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: example@example.com",
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "Profession",
      name: "profession",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: student",
      },
    },
    {
      layout: 6,
      type: "NUMBER",
      label: "Mobile",
      name: "mobile",
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: 123456789",
      },
    },
    {
      layout: 6,
      type: "SELECT",
      label: "Role",
      name: "roles",
      options: [
        {
          label: "USER",
          value: "user",
        },
        {
          label: "ADMIN",
          value: "admin",
        },
        {
          label: "INSTRUCTURE",
          value: "instructure",
        },
        
      ],
      rules: [{ required: true }],
      elementProps: {
        placeholder: "Eg: USER",
      },
    },
    {
      layout: 6,
      type: "DATE",
      label: "DOB",
      name: "DOB",
      
      elementProps: {
        placeholder: "Eg: 12/MAY/1999",
        format:"DD/MMM/YYYY",
        size:"large",
        width:"100%"
        
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "year of Graduation",
      name: "year_of_graduation",
      
      elementProps: {
        placeholder: "Eg:  1",
      
        sizr:"large"
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "Country",
      name: "country",
      
      elementProps: {
        placeholder: "Eg:  CANADA",
        
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "Time Zone",
      name: "timezone",
      
      elementProps: {
        // placeholder: "Eg:  1",
        
      },
    },
    {
      layout: 6,
      type: "NUMBER",
      label: "Clinical Experience",
      name: "clinical_experience",
      
      elementProps: {

        placeholder: "Number of year",
        
      },
    },
    {
      layout: 12,
      type: "TEXT",
      label: "ADDRESS",
      name: "full_address",
      
      elementProps: {

        placeholder: "Address",
        
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "City",
      name: "city",
      
      elementProps: {

        placeholder: "Address",
        
      },
    },
    {
      layout: 6,
      type: "TEXT",
      label: "Zipcode",
      name: "zipcode",
      
      elementProps: {

        placeholder: "Address",
        
      },
    },
     
  ];
  // {
  //   dob,

  //   year_of_graduation,
  //   place_and_country,
  //   current_country_of_residence,
  //   timezone,
  //   clinical_experience,
  //   current_occupation,
  //   appearing_for_exam_name,
  //   exam_date,
  //   is_first_attempt,
  //   user_image,
    
  //   full_address,
  //   city,
  //   zipcode,
  //   country,
  // }

  const onSuccess = (value) => {
    console.log(value);

    formref.current.validateFields().then(async (field) => {
      setLoading(true);
      // console.log("onSuccess", field);
      if(formType == "update"){
          if(initialData.email ===field.email) delete field.email
          if(initialData.mobile ===field.mobile)  delete field.mobile

      }
      try {
        await (formType == "update"?   updateUser({ ...field,_id:id })
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
