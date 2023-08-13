import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserEdit, FaUsers } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../components/Hook/useAxious';

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://creative-capture-server.onrender.com/users/admin/${user._id}`, {
            method: "PATCH"
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an admin now!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = user => {
        fetch(`https://creative-capture-server.onrender.com/users/instructor/${user._id}`, {
            method: "PATCH"
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is a instructor now!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete = item => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://creative-capture-server.onrender.com/users/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'user has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <>
            <section className='my-16'>
                <div className='mx-auto mb-16 '>
                    <div className='flex justify-center items-center gap-5'>
                        <FaUsers className='text-2xl md:text-3xl ' />
                        <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                            All Users
                        </h1>
                    </div>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
                {/* user table */}
                <div className="overflow-x-auto border-black border-2 rounded-lg">
                    <table className="table">
                        {/* head */}
                        <thead className='text-center  text-lg text-black'>
                            <tr>
                                <th >
                                    #
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Change User Role</th>

                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                users.map((item, index) =>
                                    <tr key={item._id}>
                                        <th className='text-center'>
                                            {index + 1}
                                        </th>
                                        <td className="font-bold text-center">
                                            {item.name}
                                        </td>
                                        <td className='text-center'>
                                            {item.email}
                                        </td>
                                        <td className='text-center'>
                                            <div className='flex justify-between items-center gap-5'>
                                                <button disabled={item.role === "admin"} onClick={() => handleMakeAdmin(item)} className="btn  bg-yellow-500 border-b-4 border-0 border-black hover:text-black"> <GrUserAdmin /> Make Admin </button>

                                                <button
                                                    disabled={item.role === "instructor"}
                                                    onClick={() => handleMakeInstructor(item)} className="btn bg-yellow-500 border-b- border-0 border-black hover:text-black"> <FaUserEdit /> Make Instructor</button>
                                            </div>
                                        </td>
                                        <td className='text-center'>

                                            <button onClick={() => handleDelete(item)} className="btn
                                    hover:text-black
                                    bg-red-500 border-black border-0 border-b-2 "><FaTrashAlt /></button>
                                        </td>
                                    </tr>

                                )
                            }


                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default ManageUsers;