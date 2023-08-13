import React, { useEffect, useState } from 'react';

const PopInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([]);

    useEffect(() => {
        fetch('https://creative-capture-server.onrender.com/popularClass')
            .then(res => res.json())
            .then(data => {
                setPopularInstructor(data)
                console.log(data)
            })
    }, [])



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

                {popularInstructor.map(items =>
                        <div  key={items._id} className="card w-full bg-base-100 shadow-xl">
                            <figure><img className='h-[400px] w-[460px]' src={items.teacherPhoto} alt='' /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{items.teacherName}</h2>
                                <p><span className='font-semibold text-lg'>Email: </span>{items.email}</p>
                                <p><span className='font-semibold text-lg'>Total Students: </span> {items.numberOfStudents}</p>
                                <p className='font-semibold text-lg'></p>
                            </div>
                        </div>
                )}

        </div>
    );
};

export default PopInstructor;