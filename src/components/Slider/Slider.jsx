import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import LazyLoad from 'react-lazy-load';


const Slider = () => {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <LazyLoad height={750} offset={100}>
                        <img className='h-[750px] w-full' src="https://i.ibb.co/5xP8fWV/IMG-20230608-102554.jpg" alt="" />
                    </LazyLoad>
                </SwiperSlide>

                {/* 1 */}

                <SwiperSlide>
                    <img className='h-[750px] w-full' src="https://i.ibb.co/khkDJrD/little-girl-with-long-dark-hair-holding-camera-hands-standing-alley-park-female-child-straw-hat-with.jpg" alt="" />
                </SwiperSlide>

                {/* 2 */}

                <SwiperSlide>
                    <img className='h-[750px] w-full' src="https://i.ibb.co/qphFpwd/funny-boy-with-camera.jpg" alt="" />
                </SwiperSlide>

                {/*3  */}

                <SwiperSlide>
                    <img className='h-[750px] w-full' src="https://i.ibb.co/Qft4Dmj/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera.jpg" alt="" />
                </SwiperSlide>

                {/* 4 */}

                <SwiperSlide>
                    <img className='h-[750px] w-full' src="https://i.ibb.co/Jk7PZMQ/professional-camera-blurred.jpg" alt="" />
                </SwiperSlide>

                {/* 5 */}

            </Swiper>
        </>
    );
};

export default Slider;