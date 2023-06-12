import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "./useAxious";

export const useInstructor = () => {
    const { user, loading  } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            // console.log("is ADMIN ", res.data)
            return res.data.instructor;

        }
    })
    return [isInstructor , isInstructorLoading ]
}