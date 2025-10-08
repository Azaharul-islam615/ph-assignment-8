import React, { use } from 'react';
import Allapp from './Allapp';
import { FaSearch } from "react-icons/fa";

const Allapps = ({ allAppsfetch }) => {
    const allapps = use(allAppsfetch)
    
    return (
        <div className='text-center mt-[40px] px-2'>
            <h1 className='font-bold text-[20px] lg:text-[48px]'>Our All Applications</h1>
            <p className='font-[400] text-[14px] lg:text-[20px] text-[#627382] mb-7'>Explore All Apps on the Market developed by us. We code for Millions</p>
           <div>
            <div className='flex justify-between mb-5'>
                    <h1 className='font-semibold text-[24px]'>({allapps.length}) Apps Found</h1>
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            className="border pl-10 pr-2 py-1 outline-0 rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-400"
                            type="search"
                            placeholder="Search app"
                        />
                    </div>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3 '>
                    {
                        allapps.map(oneapp => <Allapp oneapp={oneapp} key={oneapp.id}></Allapp>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Allapps;