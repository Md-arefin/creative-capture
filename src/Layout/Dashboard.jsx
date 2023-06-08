import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Dashboard = () => {
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
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;