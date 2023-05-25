import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToysRow = ({ toy , handleDelete }) => {
    const { _id, name, picture_url, price, quantity, description } = toy;
   
    return (

        <tr className='text-center'>
            <td><img className='w-20 mx-auto' src={picture_url} alt="" /></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td>
                <Link to={`/updatemytoy/${_id}`}>
                    <button className="btn btn-outline btn-info">Update</button>
                </Link>
            </td>
            <td><button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline border-sky-600 hover:bg-sky-500 ">
                <FaTrashAlt className='text-2xl text-sky-600 hover:text-black'></FaTrashAlt>
            </button></td>
        </tr>

    );
};

export default MyToysRow;