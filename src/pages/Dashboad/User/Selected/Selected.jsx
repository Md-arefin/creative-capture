import React from 'react';
import useClassQuery from '../../../../components/Hook/useClassQuery';
import {FaTrash} from 'react-icons/fa';

const Selected = () => {
    const [classes] = useClassQuery();





    return (
        <div>
            <div>
                <h3>my selected classes:  {classes?.length}</h3>
            </div>
            <div className="overflow-x-auto max-w-full mb-16 border-emerald-300 border-2 rounded-lg my-10">
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
                            <th className='text-lg text-black'>Available seat</th>
                            <th className='text-lg text-black'>Price</th>
                            <th className='text-lg text-black'>Delete</th>
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
                                <td className='text-center'></td>
                                <td className='text-right font-semibold'>
                                    ${item.price}
                                </td>
                                <td className='text-center'>
                                    <button className="btn bg-red-500"><FaTrash/></button>
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