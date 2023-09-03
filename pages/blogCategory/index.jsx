import React from 'react';
import asyncComponent from '../../util/asyncComponent'

const  BlogCategory= asyncComponent(() => import('../../components/MainComponent/BlogCategory'));

const SamplePage = () => <BlogCategory/>;

export default SamplePage;
