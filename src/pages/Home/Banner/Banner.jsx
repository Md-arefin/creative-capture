import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Banner = () => {
    return (
        <div className='my-16'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center lg:gap-28'>
                <div className='lg:pl-10 my-16'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>Bridging Art and Reality </h1>
                    <br />
                    <h1 className='my-2 text-2xl lg:text-5xl font-bold'>Through Photography</h1>

                    <div className='flex flex-col gap-5 md:flex-row mt-16'>
                        <Link to='/classes' className="btn bg-yellow-500 text-black font-bold border-b-4 border-0 hover:border-black hover:border-b-4 border-black text-lg ">
                            Our Classes
                            <MdOutlineArrowForwardIos className='text-2xl'/>
                        </Link>


                    
                            <Link to='/instructors' className="btn hover:bg-yellow-500 text-black font-bold border-b-4 border-0 border-black hover:border-black hover:border-b-4 text-lg">Our instructors
                            <IoIosArrowDroprightCircle  className='text-2xl'/>
                            </Link>
                       
                    </div>
                </div>
                <div>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/0c4d047b-6e98-40e0-ad7d-fca2b792cf89/UXWkJdBOSi.json"
                        // style={{ height: '500px', width: '500px' }}
                        className='lg:h-[500px] lg:w-[500px]'
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
        </div>
    );
};

export default Banner;