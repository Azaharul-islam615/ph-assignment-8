import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../component/Root/Root';
import Errorpage from '../component/Errorpage/Errorpage';
import Home from '../component/Home';
const appDataFetch=fetch("/app.json").then(res=>res.json())

 export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {index:true,path:"/", 
                element: <Suspense >
                    <Home appDataFetch={appDataFetch}></Home>
                </Suspense>}
        ]
    }
])