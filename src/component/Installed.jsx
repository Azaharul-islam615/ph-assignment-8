import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import { toast } from 'react-toastify';
import { removeFromLocalStorage } from './addtoLacalStorage';

const Installed = ({ installedapp,  handleId }) => {
   const handledeUnstall=()=>{
    toast(<div><h1>Unstall Successfully</h1></div>)
       
       handleId(installedapp.id)
      
       
       removeFromLocalStorage(installedapp.id);
       console.log(installedapp.id)
    
   }
    return (
        <div className='shadow-md p-2 mb-3 border-t-1 border-gray-200 flex items-center justify-between'>
            <div className=' flex items-center gap-4 '>
                <img className='w-[70px] h-[70px] lg:w-[150px] lg:h-[100px]  rounded-lg' src={installedapp.image} alt="" />
                <div>
                    <h1 className='font-semibold mb-2 lg:text-[22px] text-left'>{installedapp.title}</h1>
                    <div className='flex items-center  gap-2' >
                        <div className='flex items-center gap-1 font-medium text-[#00D390]'>
                            <GoDownload></GoDownload>
                            <h1>{installedapp.downloads}M</h1>
                        </div>
                        <div className='flex items-center gap-1 text-[#FF8811]'>
                            <FaStar></FaStar>
                            <h1>{installedapp.ratingAvg}</h1>
                        </div>
                        <div>
                            <h3 className='text-[#627382]'>{installedapp.size}MB</h3>
                        </div>

                    </div>
                </div>

            </div>
            <button onClick={handledeUnstall} className="btn btn-primary">Uninstall</button>
        </div>
    );
};

export default Installed;