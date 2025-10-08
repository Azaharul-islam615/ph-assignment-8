import React, { Component } from 'react';
import Banner from './Banner';
import Appdata from './Appdata';

const Home = ({ appDataFetch }) => {
    
        return (
            <div>
                <Banner></Banner>
                <Appdata appDataFetch={appDataFetch}></Appdata>
            </div>
        );
    }


export default Home;