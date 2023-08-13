import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaSpinner } from 'react-icons/fa'

const PrivateRoutes = ({children}) => {

    const {user, loading, setLoading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
       return <FaSpinner className='animate-spin mx-auto text-3xl text-red-600 my-96'/>
    }

    if(user){
      
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;