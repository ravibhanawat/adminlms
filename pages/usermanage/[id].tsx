import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import UserCard from '../../components/MainComponent/User/userCard';
import { getUserById } from '../../service/userService';
import { message } from 'antd';

const userDetail = () => {
    const [loading, setLoading] = useState(false);
    const [initialData, setInitalData] = useState({});
    const router = useRouter();
    
    const { id } = router.query;

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
            // formref.current.setFieldsValue(data?.getProfile);
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
  return (
    <UserCard user={initialData}  />
  )
}

export default userDetail