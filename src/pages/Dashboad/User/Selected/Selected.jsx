import React from 'react';
import useClassQuery from '../../../../components/Hook/useClassQuery';

const Selected = () => {
    const [classes] = useClassQuery();
    return (
        <div>
            <div>
                <h3>my selected classes:  {classes?.length}</h3>
            </div>
            <div className="overflow-x-auto max-w-full mb-16 border-emerald-300 border-2 rounded-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg text-black'>
                                #
                            </th>
                            <th className='text-lg text-black'>Name</th>
                            <th className='text-lg text-black'>Class title</th>
                            <th className='text-lg text-black'>Instructor</th>
                            <th className='text-lg text-black'>Total students</th>
                            <th className='text-lg text-black'>Available seat</th>
                            <th className='text-lg text-black'>Price</th>
                            <th className='text-lg text-black'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src='' alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold"></div>

                                    </div>
                                </div>
                            </td>
                            <td>

                            </td>
                            <td></td>
                            <th>

                            </th>
                        </tr>


                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Selected;