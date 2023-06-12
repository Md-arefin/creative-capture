import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxiosSecure from './useAxious';


const useClassQuery = () => {

    const { user , loading} = useContext(AuthContext);
    const [ axiosSecure ] = useAxiosSecure();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classSelected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classSelected?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data
        },
    })

    return [classes , refetch]

};

export default useClassQuery;