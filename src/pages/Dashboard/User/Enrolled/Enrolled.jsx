import React from 'react';
import useEnrolled from '../../../../components/Hook/useEnrolled';

const Enrolled = () => {
    const [payment, refetch] = useEnrolled()
    return (
        <div>
            <div className='mx-auto my-16  '>
                <div className='flex justify-center items-center gap-5'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Enrolled Classes
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[300px]'>
                </div>
            </div>

            <div className="overflow-x-auto max-w-full mb-16 border-black border-2 rounded-lg my-10">
                <table className="table">
                    {/* head */}

                    <thead>

                        <tr>
                            <th className='text-lg text-black'>
                                #
                            </th>
                            <th className='text-lg text-black text-center'>Date</th>
                            <th className='text-lg text-black text-center'>Classes</th>
                            <th className='text-lg text-black '>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            payment?.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    {item.date}
                                </td>
                                <td>
                                    <div>

                                        {item.itemNames.map((names, i) => <li key={i}>{names}</li>)}
                                    </div>

                                </td>
                                <td className='text-center font-semibold text-lg'>
                                    ${item.price}
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

export default Enrolled;