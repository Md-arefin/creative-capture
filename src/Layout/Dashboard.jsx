import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { AuthContext } from '../Providers/AuthProvider';
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { TbChartHistogram } from "react-icons/tb";
import { BiWallet } from "react-icons/bi";
import { useAdmin } from '../components/Hook/useAdmin';
import { useInstructor } from '../components/Hook/useInstructor';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    // TODO: Load data from the server to have dynamic isAdmin based on data

    // const isAdmin = true;

    const [isAdmin] = useAdmin();


    const [isInstructor] = useInstructor();


    return (

        <div className='relative'>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <div className='my-16  lg:mt-0'>
                        <Outlet></Outlet>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn bg-yellow-500 border-b-4 border-0 border-black absolute top-[10px] drawer-button lg:hidden">
                        Open dashboard</label>

                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {
                            isAdmin &&
                            <>
                                <div className='space-y-5 text-black'>
                                    <div className='text-center my-10'>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='my-5 text-xl '>{user.displayName}</h3>
                                            <h3 className='my-5 text-md'>{user?.email}</h3>
                                        </div>
                                    </div>
                                    <li>
                                        <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                            <SiGoogleclassroom className='text-2xl md:text-3xl text-black ' />
                                            <NavLink to='/dashboard/manageClasses'>Manage Classes</NavLink>
                                        </div>
                                    </li>

                                    <li>
                                        <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                            <FaUsers className='text-2xl md:text-3xl text-black ' />
                                            <NavLink to='/dashboard/manageUsers'>Manage Users</NavLink>
                                        </div>
                                    </li>
                                </div>
                            </>

                            || 

                            isInstructor &&
                            <>
                                <div className='space-y-5 text-black'>
                                    <div className='text-center my-10'>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user?.photoURL} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className='my-5 text-xl '>{user.displayName}</h3>
                                            <h3 className='my-5 text-md'>{user?.email}</h3>
                                        </div>
                                    </div>
                                    <li>
                                        <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                            <SiGoogleclassroom className='text-2xl md:text-3xl text-black ' />
                                            <NavLink to='/dashboard/addClass'>ADD Class</NavLink>
                                        </div>
                                    </li>

                                    <li>
                                        <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                            <FaUsers className='text-2xl md:text-3xl text-black ' />
                                            <NavLink to='/dashboard/myClasses'>My Classes</NavLink>
                                        </div>
                                    </li>
                                </div>
                            </>
                            
                            ||

                            <div className='space-y-5 text-black'>
                                <div className='text-center my-10'>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='my-5 text-xl '>{user.displayName}</h3>
                                        <h3 className='my-5 text-md'>{user?.email}</h3>
                                    </div>
                                </div>
                                <li>
                                    <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                        <SiGoogleclassroom className='text-2xl md:text-3xl text-black ' />
                                        <NavLink to='/dashboard/selected'>Selected Classes</NavLink>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                        <BiWallet className='text-2xl md:text-3xl text-black ' />
                                        <NavLink to='/dashboard/enrolledClasses'>Enrolled classes</NavLink>
                                    </div>
                                </li>

                                <li>
                                    <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                        <TbChartHistogram className='text-2xl md:text-3xl text-black ' />
                                        <NavLink to='/dashboard/paymentHistory'>Payment history</NavLink>
                                    </div>
                                </li>
                            </div>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;