import { useQuery } from "@tanstack/react-query";
import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import useAxiosSecure from "./useAxious";

export const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`https://summer-lens-learning-server-md-arefin.vercel.app/users/admin/${user?.email}`)
            console.log("is ADMIN ", res.data.admin)
            return res.data.admin;

        }
    })
    return [isAdmin , isAdminLoading ]
}