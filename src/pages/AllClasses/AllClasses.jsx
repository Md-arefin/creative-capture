import React, { useEffect, useState } from 'react';

const AllClasses = () => {

    const [allClass, setAllClass] = useState([]);

    useEffect(() => {
        fetch('https://summer-lens-learning-server-md-arefin.vercel.app/classes')
            .then(res => res.json())
            .then(data => setAllClass(data))
    }, [])


    return (
        <div >
            <div className='bg-black '>
                <img className='w-full h-[700px] opacity-50' src="https://i.ibb.co/QMnM2wy/camera-photographic-with-smartphone-devices-generative-ai.jpg" alt="" />
            </div>
            <div>
                <div className='mx-auto my-16 '>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        All Classes
                    </h1>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-16'>
                {
                    allClass.map(classes => <div
                        key={classes._id}
                        className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={classes.classImage} alt={classes.classTitle} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{classes.classTitle}</h2>
                            <p><span className='font-semibold text-lg'>Instructor: </span>{classes.teacherName}</p>
                            <p><span className='font-semibold text-lg'>Total Students: </span>{classes.numberOfStudents}</p>
                            <p><span className='font-semibold text-lg'>Available Seats: </span> Nai.</p>
                            <p className='font-semibold text-lg'><span>Price: </span>${classes.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-yellow-500 border-b-4 border-0 border-black ">Select Class</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllClasses;