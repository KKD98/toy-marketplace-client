import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ViewToyDetails = () => {
    useTitle('ToyDetails');
    const toy = useLoaderData();
    const { _id, picture_url, name, price, quantity, rating, sellerName, sellerEmail, description } = toy;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture_url} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex flex-col gap-3'>
                        <h1 className="text-xl font-bold">Toy Name: {name}</h1>
                        <h1 className="text-xl font-bold">Seller Name: {sellerName ? sellerName : 'test'}</h1>
                        <h1 className="text-xl font-bold">Seller Email: {sellerEmail ? sellerEmail : 'test@test.com'}</h1>
                        <h1 className="text-xl font-bold">Price: ${price}</h1>
                        <h1 className="text-xl font-bold">Quantity: {quantity ? quantity : 1}</h1>
                        <div className='flex items-center w-full lg:w-full'>
                            <p className=' text-xl font-bold'>Rating:</p>
                            <div>
                                <Rating className='mt-2 ml-2'
                                    placeholderRating={rating}
                                    emptySymbol={<FaRegStar className='text-2xl text-yellow-600'></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-2xl text-yellow-600'></FaStar>}
                                    fullSymbol={<FaStar className='text-2xl text-yellow-600'></FaStar>}
                                />
                            </div>
                        </div>
                        <p className="py-2 text-xl font-bold">Description: {description ? description : 'testtttttttttttt'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewToyDetails;