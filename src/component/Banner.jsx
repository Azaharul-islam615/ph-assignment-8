import React from 'react';
import hero from "../assets/hero.png"
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='text-center mt-6 lg:mt-10 p-3'>
            <h1 className='font-bold text-[30px] lg:text-[65px] leading-tight mb-3'>We Build <br />
                <span className='text-[#632EE3]'>Productive</span> Apps
                </h1>
            
            <p className='font-[400] text-[12px] lg:text-[20px] text-[#627382] lg:w-[970px] mx-auto mb-[20px] lg:mb-[40px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mb-5'>
                <a href="https://play.google.com/store/games?hl=en"><button className="btn mr-10 text-[16px]"><FaGooglePlay className='text-[#47BCFF] text-[20px]'></FaGooglePlay> Google Play</button></a>
                <a href="https://www.apple.com/app-store/"><button className="btn text-[16px] "><FaAppStoreIos className='bg-white text-[#00BFFC] text-[25px]'></FaAppStoreIos> App Store</button></a>
            </div>
            <img className='mx-auto lg:w-[750px]' src={hero} alt="" />

            <div className='bg-[linear-gradient(125.04deg,_#632EE3_5.68%,_#9F62F2_88.38%)] text-white py-6 rounded-2xl'>
                <h1 className='font-bold lg:text-[42px] mb-3 lg:mb-[26px]'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-evenly items-center '>
                    <div>
                        <p className=' text-[11px] font-[400] lg:text-[16px]'>Total Downloads</p>
                        <h1 className='font-extrabold lg:text-[64px] leading-tight'>29.6M</h1>
                        <p className='text-[10px] lg:text-[16px]'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-[11px] lg:text-[16px]'>Total Reviews</p>
                        <h1 className='font-extrabold lg:text-[64px] leading-tight'>906K</h1>
                        <p className='text-[10px] lg:text-[16px]'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-[11px] lg:text-[16px]'>Active Apps</p>
                        <h1 className='font-extrabold lg:text-[64px] leading-tight'>132+</h1>
                        <p className='text-[10px] lg:text-[16px]'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;