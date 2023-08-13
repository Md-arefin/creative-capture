import React, { useEffect, useState } from 'react';
import PopularCard from '../../components/popularCard/PopularCard';
import PopInstructor from '../../components/PopularInstructor/PopInstructor';
import Slider from '../../components/Slider/Slider';
import Students from '../../components/Students/Students';
import { FaUserGraduate, FaUsers, FaCameraRetro } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import Banner from './Banner/Banner';


const Home = () => {

    const [popularClass, setPopularClasses] = useState([]);


    useEffect(() => {
        fetch('https://creative-capture-server.onrender.com/popularClass')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])



    return (
        <div>

            <Banner />

            {/* slider */}
            <div className='mx-auto mb-16 '>
                <div className='flex justify-center items-center gap-5'>
                    <FaCameraRetro className='text-2xl md:text-3xl ' />
                    <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                        Framing Life's Beauty
                    </h1>
                </div>
                <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
            </div>

            <Slider />

            {/* popular class */}
            <section className='my-16 pb-16'>

                <div className='mx-auto mb-16 '>
                    <div className='flex justify-center items-center gap-5'>
                        <SiGoogleclassroom className='text-2xl md:text-3xl ' />
                        <h1 className='text-center font-semibold text-2xl md:text-3xl '>
                            Popular Classes
                        </h1>
                    </div>
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
                    <div className='flex justify-center items-center gap-5'>
                        <FaUserGraduate className='text-2xl md:text-3xl ' />
                        <h3 className='text-center font-semibold text-xl md:text-3xl '>
                            The Art of Photography
                        </h3>
                    </div>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]  md:w-[600px]'></div>
                </div>
                {/*  */}
                <Students></Students>
            </section>

            {/* Popular instructor */}

            <section className='my-16'>
                <div className='mx-auto mb-16 pb-5'>
                    <div className='flex justify-center items-center gap-5'>
                        <GiTeacher className='text-2xl md:text-3xl ' />
                        <h3 className='text-center font-semibold text-2xl md:text-3xl '>
                            Popular instructors
                        </h3>
                    </div>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
                {/*  */}
                <PopInstructor></PopInstructor>
            </section>

            {/*  */}

            <section className='my-16'>
                <div className='mx-auto mb-16 pb-5'>
                    <div className='flex justify-center items-center gap-5'>
                        <FaUsers className='text-2xl md:text-3xl ' />
                        <h3 className='text-center font-semibold text-2xl md:text-3xl '>
                            About us
                        </h3>
                    </div>
                    <div className='mx-auto border-b-2 pb-5 w-[300px]'></div>
                </div>
                <div>
                    <div className='mb-10'>
                        <img className='w-[50%] md:w-[30%] mx-auto' src="https://i.ibb.co/pXJqt2h/27165467003.jpg" alt="" />
                    </div>
                    <p>
                        At <span className='text-xl font-semibold'>Creative Capture</span>, we are passionate about photography and dedicated to helping individuals develop their skills and explore the art of capturing moments. With a team of experienced instructors, we offer a wide range of photography classes designed to cater to all levels of expertise. Whether you're a beginner looking to grasp the fundamentals or an advanced photographer seeking to enhance your techniques, our classes provide a supportive and immersive learning environment. Our instructors bring a wealth of knowledge and creativity, guiding students through hands-on projects, practical exercises, and insightful discussions. We believe in fostering a community of like-minded individuals who share a love for photography. Join us on this exciting journey as we inspire and empower you to unleash your creative vision through the lens.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;