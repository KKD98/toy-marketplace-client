import React, { useContext, useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import MyToysRow from '../MyToysRow/MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    useTitle('MyToys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const { email } = user;

    useEffect(() => {
        fetch(`https://toy-marketplace-server-peach.vercel.app/toysbyemail/${email}/2`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    const handleSort = () => {
        fetch(`https://toy-marketplace-server-peach.vercel.app/toysbyemail/${email}/1`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-peach.vercel.app/deletetoy/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remainingToy = myToys.filter(toy => toy._id !== _id);
                            setMyToys(remainingToy);
                        }
                    })
               
            }
        })
    }
    return (
        <div className='my-4 py-4'>
        <div className='my-6 flex justify-end'>
        
        <button onClick={handleSort} className="btn btn-outline btn-info">Sort by price</button>
      </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th>Toy Picture</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToysRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyToysRow>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyToys;

