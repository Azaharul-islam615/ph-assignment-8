import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../component/Root/Root';
import Errorpage from '../component/Errorpage/Errorpage';
import Home from '../component/Home';
import Allapps from '../component/Allapps';
import Appdetail from '../component/Appdetail';
const appDataFetch=fetch("/app.json").then(res=>res.json())
const allAppsfetch=fetch("/apps.json").then(res=>res.json())

 export const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {index:true,path:"/", 
                element: <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    <Home appDataFetch={appDataFetch}></Home>
                </Suspense>},
                {
                    path:"/apps",
                    element: <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                        <Allapps allAppsfetch={allAppsfetch}></Allapps>
                   </Suspense>
                },
                {path:"/appdetail/:id",
                    element: <Appdetail allAppsfetch={allAppsfetch}></Appdetail>
                }
        ]
    }
])