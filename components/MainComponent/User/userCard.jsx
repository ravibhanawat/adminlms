import React from 'react';
import { Card, Avatar, Row, Col,Button } from 'antd';
import "./User.module.css";
import { EditOutlined } from '@ant-design/icons'; 
import { useRouter } from 'next/router';
 // Create a CSS file for custom styling

const UserCard = ({ user }) => {
    const router = useRouter();
    const {id} = router.query;
  const {
    firstname,
    lastname,
    email,
    password,
    mobile,
    dob,

    year_of_graduation,
    place_and_country,
    current_country_of_residence,
    timezone,
    clinical_experience,
    current_occupation,
    appearing_for_exam_name,
    exam_date,
    is_first_attempt,
    user_image,
    
    full_address,
    city,
    zipcode,
    country,
  } = user;

  return (
    <Card>
      <Row gutter={16}> {/* Use a gutter for spacing between columns */}
        <Col span={12}>
          <div className="user-details">
            <Avatar src={user_image} size={200} style={{margin:"20px"}} />
            <p><strong>Full Name:</strong> {`${firstname} ${lastname}`}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Password:</strong> {password}</p>
            <p><strong>Contact Number:</strong> {mobile}</p>
            <p><strong>Date of Birth:</strong> {dob}</p>
             
            <Button
            type='primary'
              icon={<EditOutlined />} // Add the EditOutlined icon
              onClick={() => {
                router.push({ pathname: "/usermanage/userForm", query: { id } });
               
              }}
            >
              Edit
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <div className="user-details">
          <p><strong>Year of Graduation:</strong> {year_of_graduation}</p>
            <p><strong>Place and Country:</strong> {place_and_country}</p>
            <p><strong>Current Country of Residence:</strong> {current_country_of_residence}</p>
            <p><strong>Timezone:</strong> {timezone}</p>
            <p><strong>Clinical Experience:</strong> {clinical_experience}</p>
            <p><strong>Current Occupation:</strong> {current_occupation}</p>
            <p><strong>Appearing for Exam Name:</strong> {appearing_for_exam_name}</p>
            <p><strong>Exam Date:</strong> {exam_date}</p>
            <p><strong>Is this your first attempt:</strong> {is_first_attempt ? 'Yes' : 'No'}</p>
            
            <p><strong>Full Address:</strong> {full_address}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>Zipcode:</strong> {zipcode}</p>
            <p><strong>Country:</strong> {country}</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;
