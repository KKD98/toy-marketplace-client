import React, { useEffect } from 'react';
import pic from '../../assets/salespic.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';



const SalesSection = () => {
    useEffect(() => {
        AOS.init();
    } , [])
    return (
        <div data-aos="flip-left"  data-aos-delay="500" data-aos-duration="600" className='relative my-8 w-full'>
            <img className='mx-auto w-full lg:w-[70%] ' src={pic} alt="" />
            <div className='absolute h-full w-full lg:w-[70%] left-0 lg:left-48  top-0 bg-gradient-to-r from-[#151520] to-[rgba(21 , 21 , 21 , 0)] text-white'>
               <div className='mx-auto w-full ml-10 lg:ml-48 mt-24 lg:mt-48'>
               <p className='text-2xl lg:text-4xl font-semibold'>Get Upto 30% off</p>
                <p className='text-xl lg:text-2xl font-semibold my-3 lg:my-6'>on Latest toy collection</p>
                <button className="btn btn-info w-[25%] lg:w-[15%]">Show More</button>
               </div>
            </div>
        </div>
    );
};

export default SalesSection;