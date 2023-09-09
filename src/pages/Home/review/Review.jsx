import React, {  useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper";
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("https://summer-lens-learning-server-md-arefin.vercel.app/get-review")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, []);
    return (
        <div className='my-16 mb-16 lg:mb-44'>
        <h3 className="text-2xl text-center my-10 mb-16 lg:mb-44">What People Say About Our Services</h3>
        <div className='my-16'>

            <Swiper
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Navigation, Autoplay]}
                className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        className='text-center'>
                        <div className='flex gap-5 my-5 justify-center items-center'>
                            <ImQuotesLeft className='text-5xl text-sky-500' />
                            <div>
                            <div className="avatar">
                                <div className="w-36 rounded-full">
                                    <img src={review.image} />
                                </div>
                            </div>
                            <h5 className='font-bold text-3xl my-10'>{review.name}</h5>

                            <Rating 
                                className='mx-auto mb-5'
                                style={{ maxWidth: 100 }}
                                value={review.ratings}
                                readOnly
                            />

                            <p className='text-lg'>
                                {review.review}
                            </p>
                            </div>
                            <ImQuotesRight className='text-5xl text-sky-500' />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    </div>
    );
};

export default Review;