import React from 'react';
import g1 from '../../assets/g1.jpg';
import g2 from '../../assets/g2.jpg';
import g3 from '../../assets/g3.jpg';
import g4 from '../../assets/g4.jpg';
import g5 from '../../assets/g5.jpg';
import g6 from '../../assets/g6.jpg';
import g7 from '../../assets/g7.jpg';
import g8 from '../../assets/g8.jpg';

const GallerySection = () => {
    return (
        <div className='mb-5'>
        <h1 className='text-4xl text-center font-semibold text-sky-600 mb-4 py-2'>Disney Gallery</h1>
        <div className='mb-3 mx-auto grid grid-cols-2 lg:grid-cols-4 lg:ml-8 gap-3'>
            <div className="card lg:w-72  bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5 my-auto">
                    <img src={g1} alt="Shoes" className="rounded-xl h-80 lg:h-96 hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
            </div>
            <div className="card lg:w-72  bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5 my-auto">
                    <img src={g2} alt="Shoes" className="rounded-xl h-80 lg:h-96  hover:scale-125 transition-all duration-100 cursor-pointer" />
                </figure>
            </div>
            <div className="card lg:w-72 bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5">
                    <img src={g3} alt="Shoes" className="rounded-xl h-80 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
            </div>
            <div className="card lg:w-72 bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5">
                    <img src={g4} alt="Shoes" className="rounded-xl h-80 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
            </div>
            <div className="card lg:w-72 bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5">
                    <img src={g5} alt="Shoes" className="rounded-xl h-80 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
            </div>
            <div className="card lg:w-72 bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5">
                    <img src={g6} alt="Shoes" className="rounded-xl h-80 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
            </div>
            <div className="card lg:w-72 bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5">
                    <img src={g7} alt="Shoes" className="rounded-xl h-80 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
            </div>
            <div className="card lg:w-72 bg-gradient-to-r from-cyan-200 to-blue-400 rounded-none shadow-xl">
                <figure className="px-5 py-5">
                    <img src={g8} alt="Shoes" className="rounded-xl h-80 lg:h-96  hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
            </div>
        </div>
        </div>
    );
};

export default GallerySection;