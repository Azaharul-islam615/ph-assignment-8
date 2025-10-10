
import App from './App';
import { useLoaderData, useNavigate } from 'react-router';

const Appdata = () => {
    const load=useLoaderData()
    const navigate=useNavigate()
    const handle=()=>{
        navigate("/apps")
    }
  
    return (
        <div className='text-center mt-[30px] lg:mt-[80px] p-3'>
            <h1 className='font-bold text-[34px] lg:text-[48px]'>Trending Apps</h1>
            <p className='text-[#627382] font-[400] text-[18px] lg:text-[20px] mb-8 lg:mb-[40px]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                {
                    load.map(app=><App key={app.id} app={app}></App>)
                }
            </div>
            <button onClick={handle} className="btn btn-active btn-primary mt-10">Show All</button>
        </div>
    );
};

export default Appdata;