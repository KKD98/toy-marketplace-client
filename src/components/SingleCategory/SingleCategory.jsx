import React, { useContext } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SingleCategory = ({ category }) => {
    const {user} = useContext(AuthContext);
    const {_id , picture_url, name, price, rating } = category;

    const handleAlert = () => {
        if(!user){
            Swal.fire({
                title: 'You have to login first to view details',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={picture_url} alt="Movie" className='w-48 pl-2'/></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{name}</h2>
                <p className=' text-xl font-semibold'>Price: ${price}</p>
                <div>

                </div>
                <div className='flex items-center w-[82%] lg:w-[47%]'>
                <p className=' text-xl font-semibold'>Rating:</p> 
                <div>
                <Rating
                            placeholderRating={rating}
                            emptySymbol= {<FaRegStar className='text-2xl text-yellow-600'></FaRegStar>}
                            placeholderSymbol={ <FaStar className='text-2xl text-yellow-600'></FaStar> }
                            fullSymbol= {<FaStar className='text-2xl text-yellow-600'></FaStar>}
                        />
                </div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/viewdetails/${_id}`}>
                    <button onClick={handleAlert} className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;