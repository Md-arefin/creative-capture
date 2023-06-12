import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from './useAxious';

const usePaymentHistory = () => {

    const { user } = useContext(AuthContext);
    const [ axiosSecure ] = useAxiosSecure();

    const { data: paymentHistory = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`)
            // console.log('res from axios', res)
            return res.data
        },
    })

    return [paymentHistory , refetch]

};

export default usePaymentHistory;