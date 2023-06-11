import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { SiGoogleclassroom } from 'react-icons/si';
import Swal from 'sweetalert2';

const ManageClasses = () => {

    // TODO: Btn

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })

    return (
        <div>
            <section className='my-16'>
                <div className='mx-auto mb-16 '>
                    <div className='flex justify-center items-center gap-5'>
                        <SiGoogleclassroom className='text-2xl md:text-3xl ' />
                        <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                            All Classes
                        </h1>
                    </div>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
                {/*  */}
                {/* user table */}
                <div className="overflow-x-auto  border-black border-2 rounded-lg mx-5">
                    <table className="table table-zebra table-xs">
                        {/* head */}
                        <thead className='text-center  text-lg text-black'>
                            <tr>
                                <th >
                                    #
                                </th>
                                <th>Class Title</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                classes.map((item, index) =>
                                    <tr key={item._id}>
                                        <th className='text-center'>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-md">{item.classTitle}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='text-center text-md'>
                                            {item.teacherName}
                                        </td>
                                        <td className="font-bold text-center text-md">
                                            {item?.email}
                                        </td>
                                        <td className='text-center text-md'>
                                            {item.AvailableSits}
                                        </td>
                                        <td className="font-bold text-center text-md">
                                            ${item.price}
                                        </td>
                                        <td className='text-center text-md'>
                                            {item?.status}
                                        </td>
                                        <td className='text-center p-3'>

                                            <div className='flex flex-col gap-5'>
                                                <button onClick={() => handleMakeAdmin(item)} className="btn  bg-yellow-500 border-b-4 border-0 border-black hover:text-black"> Approve</button>

                                                <button
                                                    onClick={() => handleMakeInstructor(item)} className="btn bg-yellow-500 border-b- border-0 border-black hover:text-black">Deny</button>

                                                <button onClick={() => handleDelete(item)} className="btn
                                    hover:text-black
                                    bg-yellow-500 border-black border-0 border-b-2 ">Feed Back</button>
                                            </div>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ManageClasses;