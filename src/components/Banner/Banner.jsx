import React from 'react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full  bg-white">
            <div id="slide1" className="carousel-item relative w-full">

                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img src={banner1} className="w-full lg:w-[50%]  lg:p-5" />
                        <div className='pl-8'>
                            <h1 className="text-5xl font-bold text-sky-700">Doll</h1>
                            <p className="py-6 text-sky-700 font-semibold">Explore limitless opportunities with these dolls that open up a world <br /> of endless possibilities.</p>
                            <button className="btn bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-none ">Show More</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-sky-500 border-none text-white text-2xl hover:bg-blue-600">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-sky-500 border-none text-white text-2xl hover:bg-blue-600">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img src={banner2} className="w-full lg:w-[50%]  lg:p-5" />
                        <div className='pl-8'>
                            <h1 className="text-5xl font-bold text-sky-700">Lego</h1>
                            <p className="py-6 text-sky-700 font-semibold">Spark creativity and endless fun with building playsets and more to inspire imaginations.</p>
                            <button className="btn bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-none">Show More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-sky-500 border-none text-white text-2xl hover:bg-blue-600">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-sky-500 border-none text-white text-2xl hover:bg-blue-600">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                        <img src={banner3} className="w-full lg:w-[50%]  lg:p-5" />
                        <div className='pl-8'>
                            <h1 className="text-5xl font-bold text-sky-700">Action Figure</h1>
                            <p className="py-6 text-sky-700 font-semibold">Prepare for an exciting experience with these thrilling and captivating choices that spark your sense of adventure.</p>
                            <button className="btn bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-none">Show More</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-sky-500 border-none text-white text-2xl hover:bg-blue-600">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-sky-500 border-none text-white text-2xl hover:bg-blue-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;