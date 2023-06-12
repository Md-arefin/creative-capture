import React from 'react';
import useClassQuery from '../../../../components/Hook/useClassQuery';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Selected = () => {
    const [classes, refetch] = useClassQuery();

    const total = classes.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        // console.log(item)
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
                fetch(`https://summer-lens-learning-server-md-arefin.vercel.app/classSelected/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className='mx-auto my-16  '>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Class selected to purchase
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[500px]'>
                </div>
            </div>
            <div className='flex justify-between items-center px-10'>

                <h3 className='text-2xl text-black font-semibold'>Total amount: $ {total.toFixed(2)}</h3>
                <Link to='/dashboard/payment'>
                    <button className="btn bg-yellow-500 hover:text-black border-b-4 border-0 border-black">Pay Now</button>
                </Link>
            </div>
            <div className="overflow-x-auto max-w-full mb-16 border-black border-2 rounded-lg my-10">
                <table className="table">
                    {/* head */}

                    <thead>

                        <tr>
                            <th className='text-lg text-black'>
                                #
                            </th>
                            <th className='text-lg text-black text-center'>Class Title</th>
                            <th className='text-lg text-black'>Instructor</th>
                            <th className='text-lg text-black'>Total students</th>
                            <th className='text-lg text-black'>Available seats</th>
                            <th className='text-lg text-black'>Price</th>
                            <th className='text-lg text-black'>Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            classes?.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.
                                                    classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {item.classTitle}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.teacherName}
                                </td>
                                <td className='text-center'>{item.numberOfStudents}</td>
                                <td className='text-center'>{item.AvailableSits}</td>
                                <td className='text-right font-semibold'>
                                    ${item.price}
                                </td>
                                <td className='text-center'>
                                    <button onClick={() => handleDelete(item)} className="btn bg-red-500 border-black border-0 border-b-2 "><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Selected;