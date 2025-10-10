import React from 'react';
import Nav from "../Navbar/Nav"
import Footer from"../Footer/Footer"
import { Outlet, useNavigation} from 'react-router';


const Root = () => {
   
  const navigation=useNavigation()
  const isNavigating=Boolean(navigation.location)
    return (
        <div className='fontfamily'>
           <div className='lg:w-[1200px] mx-auto'>
                <Nav></Nav>
                
                {isNavigating && <div className='w-[200px] mx-auto text-center mt-4'><span className="loading loading-dots loading-xl"></span></div>}
                    <Outlet></Outlet>
                
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;