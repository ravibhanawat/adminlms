import React from 'react';
import asyncComponent from '../../util/asyncComponent'

const  UserManage= asyncComponent(() => import('../../components/MainComponent/User'));

const SamplePage = () => <UserManage/>;

export default SamplePage;
