import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from './useAxious';

const useEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [ axiosSecure ] = useAxiosSecure();

    const { data: payment = [], refetch } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payment/${user?.email}`)
            console.log('res from axios', res)
            return res.data
        },
    })

    return [payment , refetch]
   
};

export default useEnrolled;