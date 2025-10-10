import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import { useNavigate } from 'react-router';

const App = ({app}) => {
    const navigate=useNavigate()
    const handlecart=()=>{
        navigate(`/appdetail/${id}`)
    }
    const { id,title,downloads, ratingAvg, image }=app
    return (
        <div onClick={handlecart} className="card bg-base-100 lg:w-72 shadow-sm p-3 ">
            <figure>
                <img className='w-full rounded-xl h-[250px] mb-2 '
                    src={image} />
            </figure>
            <div className="card-body text-left p-0">
                <h2 className="card-title font-semibold text-[20px] mt-3 mb-3">{title}</h2>
               
                <div className='flex items-center justify-between mt-3'>
                    <div className='flex items-center gap-1 bg-[#F1F5E8] rounded-sm p-2 text-[#00D390] font-semibold text-[16px]'>
                        <GoDownload></GoDownload><h1>{downloads} M</h1>
                    </div>
                    <div className='flex items-center gap-1 rounded-sm p-2 text-[#FF8811] font-semibold bg-[#FFF0E1] '>
                       <FaStar></FaStar> {ratingAvg}
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default App;