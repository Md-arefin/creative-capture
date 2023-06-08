import React, { useEffect, useState } from 'react';
import PopularCard from '../../components/popularCard/PopularCard';
import Slider from '../../components/Slider/Slider';

const Home = () => {

    const [popularClass, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popularClass')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])

    return (
        <div>
            {/* slider */}

            <Slider />

            {/* popular class */}
            <section className='my-16'>
                <div className='mb-16'>
                    <h1 className='text-center font-semibold text-2xl md:text-3xl'>
                        Our Popular Classes
                    </h1>
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
        </div>
    );
};

export default Home;