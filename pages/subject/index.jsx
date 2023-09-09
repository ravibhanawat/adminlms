"use-client"
import React, { useEffect } from 'react'
import asyncComponent from '../../util/asyncComponent'

const  SubjectManage= asyncComponent(() => import('../../components/MainComponent/Subject'));

const Student = () => {
    
  return (
    <SubjectManage />
  )
}

export default Student