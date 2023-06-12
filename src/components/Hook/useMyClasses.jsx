import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from './useAxious';

const useMyClasses = () => {

    const { user, loading } = useContext(AuthContext);
    const [ axiosSecure ] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['myClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myClasses/${user?.email}`)
            console.log('res from axios', res)
            return res.data
        },
    })

    return [classes , refetch]
    
};

export default useMyClasses;