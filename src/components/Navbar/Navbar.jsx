import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Providers/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navItems = <>
        <li>
            <Link to='/' >Home</Link>
        </li>
        <li>
            <Link to='/'>Instructors</Link>
        </li>
        <li>
            <Link to='/'>Classes</Link>
        </li>
        {
            user &&
            <li>
                <Link to='/'>Dashboard</Link>
            </li>
        }
        <li>
            <Link to='/addClasses'>Update Classes</Link>
        </li>

    </>

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='relative'>
            <div className="navbar bg-base-100 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="absolute bottom[5px] lg:left-[30px] md:left-[250px] left-[60px] text-xl">
                        <div className='flex items-center justify-center gap-4 '>
                            <img className='w-[100px]' src={logo} alt="" />

                            <h3 className='w-[160px] font-bold  hidden md:block  '>Creative Capture</h3>

                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>

                            <div className="avatar mr-5">
                                <div className="w-8 rounded">
                                    <img src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            </div>


                            <Link onClick={handleLogOut} className="btn bg-yellow-500 text-black font-bold">Log out</Link>

                        </> :
                            <Link to='/login' className="btn bg-yellow-500 text-black font-bold">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;