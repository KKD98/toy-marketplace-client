import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdateMyToys = () => {
    useTitle('UpdateToy');
    const navigate = useNavigate();
    const toy = useLoaderData();
    const {_id , price , quantity , description} = toy;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
       
        const updatedToyDetails = { price , quantity , description };

        console.log(updatedToyDetails)

        // send update data to server
        fetch(`https://toy-marketplace-server-peach.vercel.app/toysupdate/${_id}` , {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToyDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    icon: 'Success!',
                    text: 'Toy Updated Successfully!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  navigate('/mytoys');
            }
        })
       
        
    }
    return (
        <div className='my-8 w-full'>
          <h1 className='text-2xl text-center font-semibold text-sky-600 mb-4 py-2'>Fill the form to Add A Toy</h1>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleUpdate} className="card-body w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                       

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required/>
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" defaultValue={description} name='description' placeholder="Description" className="input input-bordered" required/>
                        </div>
                       
                    </div>
                    <div className="form-control w-[30%] mx-auto mt-6">
                        <input type='submit' value="Update" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyToys;