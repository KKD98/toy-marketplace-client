import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import logotext from '../../assets/logotext.png'
import { AuthContext } from '../../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const userName = user?.displayName ? user.displayName : '';
    const userPicture = user?.photoURL ? user.photoURL : '';

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-base-100 mb-3">
            <div className="navbar-start">
                <img src={logo} className='w-[20%] lg:w-[10%]' alt="" />
                {/* <p className='text-2xl font-serif'>Disney World</p> */}
                <img src={logotext} className='w-[45%]' alt="" />
            </div>
            <div className="navbar-center lg:hidden">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                            return {
                                color: isActive && "blue"
                            };
                        }}>Home</NavLink>
                        <NavLink to="/alltoys" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                            return {
                                color: isActive && "blue"
                            };
                        }}>All Toys</NavLink>

                       {
                        user && 
                        <NavLink to="/mytoys" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                            return {
                                color: isActive && "blue"
                            };
                        }}>My Toys</NavLink>
                       }

                       {
                        user && 
                        <NavLink to="/addatoy" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                            return {
                                color: isActive && "blue"
                            };
                        }}>Add a Toy</NavLink>
                       }

                        <NavLink to="/blogs" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                            return {
                                color: isActive && "blue"
                            };
                        }}>Blogs</NavLink>
                    </ul>
                </div>
            </div>
            <div className='navbar-center hidden lg:block lg:flex lg:justify-between  lg:w-[30%]'>
                <NavLink to="/" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                    return {
                        color: isActive && "blue"
                    };
                }}>Home</NavLink>
                <NavLink to="/alltoys" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                    return {
                        color: isActive && "blue"
                    };
                }}>All Toys</NavLink>

                {
                    user && 
                    <NavLink to="/mytoys" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                    return {
                        color: isActive && "blue"
                    };
                }}>My Toys</NavLink>
                }

                {
                    user && 
                    <NavLink to="/addatoy" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                    return {
                        color: isActive && "blue"
                    };
                }}>Add a Toy</NavLink>
                }

                <NavLink to="/blogs" className='text-xl text-sky-600 font-semibold hover:text-sky-800' style={({ isActive }) => {
                    return {
                        color: isActive && "blue"
                    };
                }}>Blogs</NavLink>
            </div>

            <div className="navbar-end">
            <Tooltip  id="my-tooltip"></Tooltip>
                {
                    userPicture &&
                    <div className="avatar mr-3">
                        <div className="w-12 rounded-full" data-tooltip-id='my-tooltip' data-tooltip-content={userName}>
                            <img src={userPicture}/>
                        </div>
                    </div>
                }
                {
                    user ? <Link onClick={handleLogOut}>
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">Logout</button>
                    </Link> :
                        <Link to="/login">
                            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;