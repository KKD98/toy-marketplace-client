import React from 'react';
import useTitle from '../../hooks/useTitle';
import errorImg from '../../assets/error.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    useTitle("ErrorPage");
    return (
        <div>
            <img className='w-[50%] mx-auto' src={errorImg} alt="" />
            <div className='flex  justify-center'>
            <Link to="/">
                <button className="btn border-2 border-red-600 text-black bg-white hover:bg-gray-600">Go To HomePage</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;