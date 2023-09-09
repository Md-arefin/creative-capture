import React, { useEffect, useState } from 'react';

import Card from './Card';

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
                    allClass.map(classes => <Card
                        key={classes._id}
                        classes={classes}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default AllClasses;