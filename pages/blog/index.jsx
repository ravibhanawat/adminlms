import React from 'react';
import asyncComponent from '../../util/asyncComponent'

const  Blog= asyncComponent(() => import('../../components/MainComponent/Blog'));

const SamplePage = () => <Blog/>;

export default SamplePage;
