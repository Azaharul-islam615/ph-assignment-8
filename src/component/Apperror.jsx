import React from 'react';
import apperror from "../assets/App-Error.png"
import { useNavigate } from 'react-router';

const Apperror = () => {
    const navigate=useNavigate()
    const handlebtn=()=>{
        navigate(-1)
    }
    return (
        <div >
            <div className='lg:w-[1200px] mt-4'>
                <img className='mx-auto w-[150px] lg:w-[220px] mb-2' src={apperror} alt="" />
                <h1 className='text-center font-semibold text-[20px] lg:text-[40px]'>OPPS!! APP NOT FOUND</h1>
                <p className='font-[400] text-[14px] lg:text-[20px] text-[#627382] mb-2'>The App you are requesting is not found on our system.  please try another apps</p>
                <button onClick={handlebtn} className="btn btn-primary text-[16px]">Go Back!</button>
            </div>
        </div>
    );
};

export default Apperror;