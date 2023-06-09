import React, { useEffect, useState } from 'react';
import PopularCard from '../../components/popularCard/PopularCard';
import PopInstructor from '../../components/PopularInstructor/PopInstructor';
import Slider from '../../components/Slider/Slider';
import Students from '../../components/Students/Students';

const Home = () => {

    const [popularClass, setPopularClasses] = useState([]);


    useEffect(() => {
        fetch('https://summer-lens-learning-server-md-arefin.vercel.app/popularClass')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])



    return (
        <div>
            {/* slider */}

            <Slider />

            {/* popular class */}
            <section className='my-16 pb-16'>
                
                <div className='mx-auto mb-16 '>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Popular Classes
                    </h1>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>

                {/* card */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>

                    {
                        popularClass.map(classItem => (

                            <PopularCard key={classItem._id} classItem={classItem}></PopularCard>
                        ))
                    }
                </div>
            </section>

            {/* Extra section */}

            <section className='my-16 bg-gray-300 py-16'>
                <div className='mx-auto mb-16 pb-5'>
                    <h3 className='text-center font-semibold text-2xl md:text-3xl '>
                        Our Students
                    </h3>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
                {/*  */}
                <Students></Students>
            </section>

            {/* Popular instructor */}

            <section className='my-16'>
                <div className='mx-auto mb-16 pb-5'>
                    <h3 className='text-center font-semibold text-2xl md:text-3xl '>
                        Popular instructors
                    </h3>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
                {/*  */}
                <PopInstructor></PopInstructor>
            </section>


        </div>
    );
};

export default Home;