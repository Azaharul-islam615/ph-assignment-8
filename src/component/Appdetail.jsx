import React, { use, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineDownload } from 'react-icons/md';
import { TbFileLike } from 'react-icons/tb';
import { useParams } from 'react-router';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const Appdetail = ({ allAppsfetch }) => {
    const [clicked,setClicked]=useState(false)
    const appdetail = use(allAppsfetch)
    const {id}=useParams()
    const appId=parseInt(id)
    const eachapp=appdetail.find(singleapp=>singleapp.id===appId)
   
    const rating=eachapp.ratings
   
    const toggle=()=>{
        setClicked(!clicked)
    }

    return (
        <>
            <div className='border-b-1'>
                <div className='flex items-center gap-16 mt-8 mb-9'>
                    <img className='w-[400px]' src={eachapp.image} alt="" />
                    <div className=''>
                        <div className='border-b-[1px] lg:w-[700px] border-[#001931]'>
                            <h1 className='font-bold text-[30px] leading-tight'>{eachapp.title}</h1>
                            <p className='font-semibold text-[18px] text-[#627382] mb-1'>Developed by <span className='text-[#632EE3]'>{eachapp.companyName}</span></p>
                        </div>
                        <div>
                            <div>
                                <MdOutlineDownload className='text-[#00827A] text-[35px] mt-1'></MdOutlineDownload>
                                <p className='font-[400] text-[16px] leading-tight'>Downloads</p>
                                <h1 className='font-extrabold text-[28px]'>{eachapp.downloads}M</h1>
                            </div>
                            <div className='mb-1'>
                                <FaStar className='text-[#FF8811] text-[25px]'></FaStar>
                                <p>Average Ratings</p>
                                <h1 className='font-extrabold text-[28px] leading-tight'>{eachapp.ratingAvg}</h1>
                            </div>
                            <div>
                                <TbFileLike className='text-[#9F62F2] text-[25px] leading-tight'></TbFileLike>
                                <p>Total Reviews</p>
                                <h1 className='font-extrabold text-[28px] leading-tight'>{eachapp.reviews}K</h1>
                            </div>
                        </div>
                        <button disabled={clicked} onClick={toggle} className="btn btn-success bg-[#00D390] text-white text-[16px] mt-1">{clicked ? "Installed" :`Install Now (${eachapp.size} MB)`} </button>
                    </div>

                </div>
        </div>

        <div className='mt-9 mb-4'>
                <BarChart width={1200} height={400} data={rating} layout="vertical">
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="count" fill="#FF8811" barSize={20} radius={[4, 4, 4, 4]} />
                </BarChart>
        </div>
        <div>
                <h1 className='font-semibold text-[24px]'>Description</h1>
                <p className='text-[#627382] text-[20px]'>{eachapp.description}</p>
        </div>
        </>
    );
};

export default Appdetail;