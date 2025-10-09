import React from 'react';
import Nav from "../Navbar/Nav"
import Footer from"../Footer/Footer"
import { Outlet } from 'react-router';
import { useNavigation } from 'react-router';

const Root = () => {
    const navigation=useNavigation()
    return (
        <div className='fontfamily'>
            
            {/* loading */}
            {navigation.state === "loading" && (
                <div className="absolute top-full left-0 w-full text-center py-2 bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-medium">
                    Loading...
                </div>
            )}
           
            
           <div className='lg:w-[1200px] mx-auto'>
                <Nav></Nav>
                
                <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;