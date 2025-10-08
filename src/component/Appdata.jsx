import React, { use } from 'react';
import App from './App';

const Appdata = ({ appDataFetch }) => {
    const appsData = use(appDataFetch)
    console.log(appsData)
    return (
        <div className='text-center mt-[80px]'>
            <h1 className='font-bold text-[48px]'>Trending Apps</h1>
            <p className='text-[#627382] font-[400] text-[20px] mb-[40px]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-3 gap-5'>
                {
                    appsData.map(app=><App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Appdata;