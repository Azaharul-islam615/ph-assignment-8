import React from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../component/Root/Root';
import Errorpage from '../component/Errorpage/Errorpage';
import Home from '../component/Home';

 export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {index:true,path:"/", Component:Home}
        ]
    }
])