import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router'
import Root from '../component/Root/Root';
import Errorpage from '../component/Errorpage/Errorpage';
import Home from '../component/Home';
import Allapps from '../component/Allapps';
import Appdetail from '../component/Appdetail';
import Installetion from '../component/Installetion';


const allAppsfetch = fetch("/apps.json").then(res => res.json())

 export const router = createBrowserRouter([
   
    
    {
        path: "/",
        Component:Root,
       
        children:[
            {index:true,path:"/", 
               
                loader: () => fetch("/app.json"),
                Component:Home,
                
            } ,
                {
                    path:"/apps",
                    loader: () => fetch("/apps.json"),
                    Component:Allapps
                        
                   
                },
                {path:"/appdetail/:id",
                element: <Appdetail allAppsfetch={allAppsfetch}></Appdetail>
                },
                {
                    path:"/install",
                    loader: () => fetch("/apps.json"),
                     Component:Installetion
                       
                    
                },
                {
                    path:"*",
                    Component:Errorpage
                }
        ]
    }
])