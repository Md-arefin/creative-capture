import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Students = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/CVkq7S4/photography-for-kids-kelly-sikkema-p5-DDct-K4dg-A-unsplash.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/N1fxMbN/photography-for-kids-kelly-sikkema-0b-J12u-Yo9b-U-unsplash.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/nm34dcg/photography-for-kids-annie-spratt-D-At6z5i2u-Y-unsplash.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/3312232/pexels-photo-3312232.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/7j7P7RL/adult-beautiful-bush-1264210.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/N1fxMbN/photography-for-kids-kelly-sikkema-0b-J12u-Yo9b-U-unsplash.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/cth5tTP/portrait-woman-with-virtual-reality-headset.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/n1cqyFP/teach-kids-photography.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Students;