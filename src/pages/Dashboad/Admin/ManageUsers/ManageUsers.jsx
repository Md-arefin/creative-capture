import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDelete = item => {
        console.log(item)
    }

    return (
        <>
            <section className='my-16'>
                <h1 className='text-center my-10 '><span className='text-lg font-semibold'>Total users: </span> {users.length}</h1>

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
                                                <button className="btn  bg-yellow-500 border-b-4 border-0 border-black hover:text-black"> <GrUserAdmin/> Make Admin </button>
                                                <button className="btn bg-yellow-500 border-b- border-0 border-black hover:text-black"> <FaUserEdit/> Make Instructor</button>
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