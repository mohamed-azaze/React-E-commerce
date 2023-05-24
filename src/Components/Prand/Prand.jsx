import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Prand.css'
import image1 from '../../img/Prand Image/brand1.jpg'
import image2 from '../../img/Prand Image/brand2.jpg'
import image3 from '../../img/Prand Image/brand3.jpg'
import image4 from '../../img/Prand Image/brand4.jpg'
import image5 from '../../img/Prand Image/brand5.jpg'


const Prand = () => {
    return (
        <>
            <div className="container prand" style={{ "paddingTop": "60px", "paddingBottom": "40px" }}>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        565: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 4,
                        },
                        991: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper txt-center"
                >
                    <SwiperSlide>
                        <img src={image1} alt="smith" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="salomo" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="rich kids" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image4} alt="obear" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="smith" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="salomo" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Prand