import React from 'react';
import Nav from "../Navbar/Nav"
import Footer from"../Footer/Footer"
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='fontfamily'>
            
               
           
            
           <div className='lg:w-[1200px] mx-auto'>
                <Nav></Nav>
                
                <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;