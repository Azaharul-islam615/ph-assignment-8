import { Github } from 'lucide-react';
import React from 'react';
import logo from"../../assets/logo.png"
import { Link } from 'react-router';

const Nav = () => {
   
    const links=<>
        <Link to="/"> <li ><p className='hover:text-[#632EE3] hover:border-b-2 para'>Home</p></li></Link>

        <Link to="/apps"> <li ><p className='hover:text-[#632EE3] hover:border-b-2 para'>Apps</p></li></Link>
        <Link to="/install"><li ><p className='hover:text-[#632EE3] hover:border-b-2 para'>Installation</p></li></Link>
    </>
    return (
        <div className="navbar bg-base-100 shadow-md rounded-md lg:px-9 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
               <a href="/">
                    <div className='flex items-center '>
                        <img className='w-[50px]' src={logo} alt="" />
                        <h1 className="btn btn-ghost lg:text-xl text-[#632EE3]">HERO.IO</h1>
                    </div>
               </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-[16px] text-[#000000c1]">
                   {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <a href='https://github.com/Azaharul-islam615' className="btn bg-[linear-gradient(90deg,_#992EE3_0%,_#54197D_100%)] text-white text-[15px] "><Github className='bg-white text-black rounded-full lg:w-[25px] h-[25px] p-[2px]'></Github> Contribute</a>
            </div>

            
        </div>
    );
};

export default Nav;