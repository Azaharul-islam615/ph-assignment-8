import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineDownload } from 'react-icons/md';
import { TbFileLike } from 'react-icons/tb';
import { useParams } from 'react-router';

const Appdetail = ({ allAppsfetch }) => {
    const appdetail = use(allAppsfetch)
    const {id}=useParams()
    const appId=parseInt(id)
    const eachapp=appdetail.find(singleapp=>singleapp.id===appId)
    console.log(eachapp)
    return (
        <div className='flex items-center gap-16 mt-8'>
            <img className='w-[350px]' src={eachapp.image} alt="" />
            <div>
                <div className='border-b-[2px] lg:w-[700px] border-[#001931]'>
                    <h1 className='font-bold text-[30px] leading-tight'>SmPlan:ToDo List with Reminder</h1>
                    <p className='font-semibold text-[18px] text-[#627382] mb-2'>Developed by <span className='text-[#632EE3]'>productive.io</span></p>
                </div>
                <div>
                    <div>
                        <MdOutlineDownload className='text-[#00827A] text-[35px] mt-2'></MdOutlineDownload>
                        <p className='font-[400] text-[16px] leading-tight'>Downloads</p>
                        <h1 className='font-extrabold text-[28px]'>8M</h1>
                    </div>
                    <div>
                        <FaStar></FaStar>
                        <p>Average Ratings</p>
                        <h1 className='font-extrabold text-[28px] leading-tight'>4.9</h1>
                    </div>
                    <div>
                        <TbFileLike className='text-[#9F62F2] text-[20px] leading-tight'></TbFileLike>
                        <p>Total Reviews</p>
                        <h1 className='font-extrabold text-[28px]'>54K</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appdetail;