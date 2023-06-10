import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const useClassQuery = () => {

    const { user } = useContext(AuthContext);

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classSelected', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classSelected?email=${user?.email}`)
            return res.json()
        },
    })

    return [classes , refetch]

};

export default useClassQuery;