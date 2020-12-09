import React, {} from 'react';
import Header from '../components/Header/header';
import * as constants from '../constants/constants';
import APIResponseData from '../components/APIResponseData/apiResponseData';

const Home = () => {

    return(
        <>
        <Header/>
        <h1>API Call Methods in JavaScript</h1>
        <APIResponseData APIMethodName={constants.fetchMethod}/>
        <APIResponseData APIMethodName={constants.XMLHttpRequestMethod}/>
        <APIResponseData APIMethodName={constants.axiosMethod}/>
        </>
    )
}

export default Home;