import React, { useEffect, useState } from 'react';

const InstructorsPage = () => {

    const [sir, setSir] = useState([]);
   

    useEffect(() => {
        fetch('https://summer-lens-learning-server-md-arefin.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setSir(data))
    }, [])

    return (
        <div>
            <div className='bg-black '>
                <img className='w-full h-[700px] opacity-50' src="https://i.ibb.co/qYF0VmD/flat-lay-photography-concept-black-background.jpg" alt="" />
            </div>
            <div>
                <div className='mx-auto my-16 '>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Our Instructors
                    </h1>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
            </div>
            <div className="overflow-x-auto mb-16 border-black border-2 rounded-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg text-black'>
                               #
                            </th>
                            <th className='text-lg text-black'>Instructors Name</th>
                            <th className='text-lg text-black text-center'>Experiences</th>
                            <th className='text-lg text-black text-center'>Total Classes</th>
                            <th className='text-lg text-black text-center'>Total Students</th>
                            <th className='text-lg text-black text-center'>See Classes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            sir.map((sir, index) => <tr
                            key={sir._id}>
                                <th>
                                   {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={sir.instructorImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{sir.instructorName
}</div>
                                        
                                        </div>
                                    </div>
                                </td>
                                <td  className='text-center'>
                                    {sir.instructorExperience}
                                </td>
                                <td  className='text-center'>{sir.numberOfClasses}</td>
                                <td  className='text-center'>
                                  {sir.numberOfStudents}
                                </td>
                                <td  className='text-center'>
                                <button className="btn  bg-yellow-500 border-b-4 border-0 border-black ">See Classes</button>
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

export default InstructorsPage;