"use-client"
import React, { useEffect } from 'react'
import asyncComponent from '../../util/asyncComponent'

const  EXAMManage= asyncComponent(() => import('../../components/MainComponent/Exam'));

const Student = () => {
    
  return (
    <EXAMManage />
  )
}

export default Student