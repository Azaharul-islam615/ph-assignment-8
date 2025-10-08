import React from 'react';
import errorphoto from "../../assets/error-404.png"
import { useNavigate } from 'react-router';

const Errorpage = () => {
    const navigate=useNavigate()
    const handled=()=>{
        navigate(-1)
    }
    return (
        <div className='text-center'>
            <img className='mx-auto mb-3 w-[440px] ' src={errorphoto} alt="" />
           <div>
                <h1 className='font-semibold text-[48px]'>Oops, page not found!</h1>
                <p className='font-[400] text-[20px] mb-2 text-[#627382]'>The page you are looking for is not available.</p>
                <button onClick={handled} className="btn btn-primary px-6 font-semibold text-[16px]">Go Back</button>
           </div>
        </div>
    );
};

export default Errorpage;