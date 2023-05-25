import React, { useContext, useState } from 'react';
import { FaGoogle, FaUserCircle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('SignUp');
    const [error , setError] = useState("");
    const {createUser , handleGoogleSignIn , updateUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleRegister = event => {
        setError("");
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;


        if(password < 6){
            return setError("Password length nust be more than six characters");
        }

        createUser(email , password)
        .then(res => {
            const user = res.user;
            console.log(user);
            updateUser(name , photoUrl)
            .then(data => console.log(data))
            .catch(error => console.log(error))
            navigate('/login')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })

    }

    const handleGoogleLogin = () => {
        setError("");
        handleGoogleSignIn();
        navigate(from , {replace: true});
    }

    return (
        <div className='my-4'>
            <div className="hero min-h-screen bg-base-200 py-3">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <FaUserCircle className='text-center text-6xl mx-auto text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'></FaUserCircle>
                        <h1 className='text-center font-bold text-2xl mb-3'>Please Sign Up</h1>

                        <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <p className='text-red-500'>{error ? error : ''}</p>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"/>
                        </div>
                        </form>

                        <div className="divider">Or sign In With</div>
                        <div className='mx-auto'>
                            <button onClick={handleGoogleLogin} className='btn bg-white border-none hover:bg-white'>
                                <FaGoogle className='text-4xl mx-auto text-white bg-blue-600 border-2 border-blue-600 p-1 rounded-full'></FaGoogle>
                            </button>
                        </div>
                        <h1 className='text-md font-semibold'>Already have an account? <span className='text-blue-600'> <Link to="/login">Please Login</Link> </span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;