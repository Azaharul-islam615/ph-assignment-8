import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';

const App = ({app}) => {
    const { title,
        description
        , downloads, ratingAvg, image }=app
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-3 ">
            <figure>
                <img className='w-full rounded-xl h-[260px]  '
                    src={image} />
            </figure>
            <div className="card-body text-left">
                <h2 className="card-title font-semibold text-[20px]">{title}</h2>
                <p className='text-[#001931] font-medium text-[16px]'>{description}</p>
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