import React from 'react';
import popular1 from '../../assets/popular1.jpg'
import popular2 from '../../assets/popular2.jpg'
import popular3 from '../../assets/popular3.jpg'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const PopularSection = () => {
    return (
        <div className='my-4'>
            <h1 className='text-4xl text-center font-semibold text-sky-600 mb-4 py-2'>Popular In Disney World</h1>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-5 w-[80%] mx-auto'>
                <div className="card w-[70%] h-[80%] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={popular1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-blue-700 font-semibold">Disney Doll</h2>
                        <p className='text-xl text-blue-700 font-semibold'>Price: <span>$10</span></p>
                        <Rating
                            placeholderRating={5}
                            emptySymbol= {<FaRegStar className='text-2xl text-yellow-600'></FaRegStar>}
                            placeholderSymbol={ <FaStar className='text-2xl text-yellow-600'></FaStar> }
                            fullSymbol= {<FaStar className='text-2xl text-yellow-600'></FaStar>}
                        />
                        <div className="card-actions">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[70%] h-[80%] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={popular2} alt="Shoes" className="rounded-xl mb-12" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-2xl text-blue-700 font-semibold">Spider Man</h2>
                        <p className='text-xl text-blue-700 font-semibold'>Price: <span>$8</span></p>
                        <Rating
                            placeholderRating={4.7}
                            emptySymbol= {<FaRegStar className='text-2xl text-yellow-600'></FaRegStar>}
                            placeholderSymbol={ <FaStar className='text-2xl text-yellow-600'></FaStar> }
                            fullSymbol= {<FaStar className='text-2xl text-yellow-600'></FaStar>}
                        />
                        <div className="card-actions">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[70%] h-[80%] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={popular3} alt="Shoes" className="rounded-xl mb-6" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title  text-2xl text-blue-700 font-semibold">Yoda</h2>
                        <p className='text-xl text-blue-700 font-semibold'>Price: <span>$11</span></p>
                        <Rating
                            placeholderRating={4.9}
                            emptySymbol= {<FaRegStar className='text-2xl text-yellow-600'></FaRegStar>}
                            placeholderSymbol={ <FaStar className='text-2xl text-yellow-600'></FaStar> }
                            fullSymbol= {<FaStar className='text-2xl text-yellow-600'></FaStar>}
                        />
                        <div className="card-actions">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularSection;