import React, { use, useEffect, useState } from 'react';
import { getStoreApp } from './addtoLacalStorage';
import Installed from './Installed';
import { FaAngleDown } from 'react-icons/fa';

const Installetion = ({ allAppsfetch }) => {
    
    const [installed,setInstalled]=useState([])
    const [sort,setSort]=useState("")
    const appdetails = use(allAppsfetch)
    
    const handleId=(id)=>{
        const remove=installed.filter(appremove=>appremove.id!==id)
        setInstalled(remove)
       
    }
    
    useEffect(()=>{
        const storeappData = getStoreApp()
        const convertedapp=storeappData.map(app=>parseInt(app))
        const myapp=appdetails.filter(app=>convertedapp.includes(app.id))
        setInstalled(myapp)
        
    },[])
    const handledSort=(type)=>{
        setSort(type)
        if (type ==="High-Low"){
            const sortHighlevel=[...installed].sort((a,b)=>b.downloads-a.downloads)
            setInstalled(sortHighlevel)
        }
        if (type ==="Low-High"){
            const sortedByLowlevel=[...installed].sort((a,b)=>a.downloads-b.downloads)
            setInstalled(sortedByLowlevel)
        }
    }
    return (
        <div className='mt-[80px] text-center px-2'>
            <h1 className='font-bold text-[30px] lg:text-[48px] leading-tight'>Your Installed Apps</h1>
            <p className='text-[16px] lg:text-[20px] text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
          <div>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='font-semibold text-[20px] lg:text-[24px]'>{installed.length} Apps Found</h1>
                    {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                    {/* For TSX uncomment the commented types below */}
                    <button className="btn text-[#627382]" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        Sort By:{sort?sort:""} <FaAngleDown></FaAngleDown>
                    </button>

                    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                        <li><a onClick={() => handledSort("High-Low")}>High-Low</a></li>
                        <li><a onClick={() => handledSort("Low-High")}>Low-High</a></li>
                    </ul>
            </div>
                <div >
                    {
                        installed.map(installedapp => <Installed handleId={handleId}  key={installedapp.id} installedapp={installedapp}></Installed>)
                    }
                </div>
          </div>
        </div>
    );
};

export default Installetion;