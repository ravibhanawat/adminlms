import React from 'react'
import asyncComponent from '../../util/asyncComponent'

const  Materiallib= asyncComponent(() => import('../../components/MainComponent/Meterial'));
const index = () => {
  return (
    <Materiallib />
  )
}

export default index