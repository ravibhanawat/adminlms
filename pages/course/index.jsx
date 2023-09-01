"use-client"
import React, { useEffect } from 'react'
import asyncComponent from '../../util/asyncComponent'

const  CourserManage= asyncComponent(() => import('../../components/MainComponent/Course'));

const course = () => {
    
  return (
    <CourserManage />
  )
}

export default course