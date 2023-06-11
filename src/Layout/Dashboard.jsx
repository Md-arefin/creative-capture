import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { AuthContext } from '../Providers/AuthProvider';
import { SiGoogleclassroom } from "react-icons/si";
import { BiWallet } from "react-icons/bi";
import { TbChartHistogram } from "react-icons/tb";

const Dashboard = () => {

    const { user } = useContext(AuthContext)

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
                            user ?
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
                                            <NavLink >Enrolled classes</NavLink>
                                        </div>
                                    </li>

                                    <li>
                                        <div className='text-black bg-yellow-500 text-lg border-b-4 border-0 border-black flex justify-center'>
                                            <TbChartHistogram className='text-2xl md:text-3xl text-black ' />
                                            <NavLink >Payment history</NavLink>
                                        </div>
                                    </li>
                                </div> : " "
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;