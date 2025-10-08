import React, { use } from 'react';

const Appdata = ({ appDataFetch }) => {
    const appsData = use(appDataFetch)
    console.log(appsData)
    return (
        <div>
            
        </div>
    );
};

export default Appdata;