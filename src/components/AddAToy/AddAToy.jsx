import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';




const AddAToy = () => {
    useTitle('AddAToys');
    const {user} = useContext(AuthContext);
    console.log(user);

    const navigate = useNavigate();

    const {displayName , email} = user;

    const handleSubmitForm = event => {
        event.preventDefault();
        const form = event.target;
        const sellerEmail = form.sellerEmail.value;
        const sellerName = form.sellerName.value;
        const name = form.toyName.value;
        const picture_url = form.toyUrl.value;
        const price = form.price.value;
        const rating = form.ratings.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const category = form.category.value;

        const toyDetails = {sellerEmail , sellerName , name , picture_url , price , rating , quantity , description , category};

        console.log(toyDetails)

        // Post

        fetch('https://toy-marketplace-server-peach.vercel.app/addtoy' , {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy added successfully',
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
                <form onSubmit={handleSubmitForm} className="card-body w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" defaultValue={email} name='sellerEmail' placeholder="Seller Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" defaultValue={displayName} name='sellerName' placeholder="Seller Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' placeholder="Toy Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy URL</span>
                            </label>
                            <input type="text" name='toyUrl' placeholder="Toy URL" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" name='ratings' placeholder="Ratings" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <select className="selected w-full max-w-xs mt-8 ml-1 p-3 border-2 border-gray-300 rounded-2xl" name='category' required>
                                <option disabled selected>Select your category</option>
                                <option value="disneyprincess">disneyprincess</option>
                                <option value="lego">lego</option>
                                <option value="actionfigure">actionfigure</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control w-[30%] mx-auto mt-6">
                        <input type='submit' value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;