import React from 'react';
import hero from "../assets/hero.png"

const Banner = () => {
    return (
        <div className='text-center mt-6 lg:mt-10 p-3'>
            <h1 className='font-bold lg:text-[65px] leading-tight mb-3'>We Build <br />
                <span className='text-[#632EE3]'>Productive</span> Apps
                </h1>
            
            <p className='font-[400] text-[12px] lg:text-[20px] text-[#627382] lg:w-[970px] mx-auto mb-[20px] lg:mb-[40px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mb-5'>
                <button className="btn mr-10">Google Play</button>
                <button className="btn ">App Store</button>
            </div>
            <img className='mx-auto lg:w-[750px]' src={hero} alt="" />
        </div>
    );
};

export default Banner;