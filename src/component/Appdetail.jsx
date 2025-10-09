import React, { use, useEffect, useState } from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { MdOutlineDownload } from 'react-icons/md';
import { TbFileLike } from 'react-icons/tb';
import { useParams } from 'react-router';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToLocalStorage, getStoreApp } from './addtoLacalStorage';
import { toast } from 'react-toastify';


const Appdetail = ({ allAppsfetch }) => {
    const [clicked,setClicked]=useState(false)
    const appdetail = use(allAppsfetch)
    const {id}=useParams()
    const appId=parseInt(id)
    const eachapp=appdetail.find(singleapp=>singleapp.id===appId)
   
    const rating=eachapp.ratings
    useEffect(() => {
        const storeAppData = getStoreApp().map(app => parseInt(app)); // LocalStorage থেকে IDs
        if (storeAppData.includes(appId)) {
            setClicked(true); 
        }
    }, [appId]);
   
    const toggle=(id)=>{
        setClicked(!clicked)
        addToLocalStorage(id)
        toast(<div className='flex items-center gap-1'> <h2><FaCheckCircle className='text-green-500'></FaCheckCircle></h2><h1>Install Successfully !</h1></div>)
    }

    return (
        <>
            <div className='border-b-1'>
                <div className= 'text-center lg:text-left px-3 lg:flex items-center gap-6 mt-8 mb-9'>
                    <img className='mx-auto mb-3 lg:w-[315px] lg:h-[300px] rounded-lg' src={eachapp.image} alt="" />
                    <div className=''>
                        <div className='border-b-[1px] lg:w-[700px] border-[#001931]'>
                            <h1 className='font-bold lg:text-[34px]  '>{eachapp.title}</h1>
                            <p className='font-semibold lg:text-[18px] text-[#627382] mb-4'>Developed by <span className='text-[#632EE3]'>{eachapp.companyName}</span></p>
                        </div>
                        <div className='flex items-center gap-6 mt-3 '>
                            <div>
                                <MdOutlineDownload className='mx-auto lg:mx-0 text-[#00827A] text-[35px] mt-1  mb-2'></MdOutlineDownload>
                                <p >Downloads</p>
                                <h1 className='font-extrabold text-[20px] lg:text-[36px]'>{eachapp.downloads}M</h1>
                            </div>
                            <div className='mb-1'>
                                <FaStar className='mx-auto  lg:mx-0 text-[#FF8811] text-[35px] mt-1 mb-2'></FaStar>
                                <p>Average Ratings</p>
                                <h1 className='font-extrabold text-[20px] lg:text-[36px]'>{eachapp.ratingAvg}</h1>
                            </div>
                            <div>
                                <TbFileLike className='mx-auto  lg:mx-0 text-[#9F62F2] text-[35px] mt-1  mb-2'></TbFileLike>
                                <p>Total Reviews</p>
                                <h1 className='font-extrabold text-[20px] lg:text-[36px]'>{eachapp.reviews}K</h1>
                            </div>
                        </div>
                        <button disabled={clicked} onClick={()=>toggle(id)} className="btn btn-success bg-[#00D390] text-white text-[16px] mb-4 mt-3">{clicked ? "Installed" :`Install Now (${eachapp.size} MB)`} </button>
                    </div>

                </div>
        </div>

            <div className='mt-9 mb-4' style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={rating} layout="vertical">
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#FF8811" barSize={20} radius={[4, 4, 4, 4]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        <div className='px-2'>
                <h1 className='font-semibold text-[24px]'>Description</h1>
                <p className='text-[#627382] text-[20px]'>{eachapp.description}</p>
        </div>
        </>
    );
};

export default Appdetail;