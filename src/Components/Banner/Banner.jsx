import React from 'react';
import '../../effect.css'
import './Banner.css'
import SliderOne from "../../img/home1-slider.jpg";
import SliderTwo from "../../img/home2-slide2.jpg";
import BannerOne from "../../img/home1.jpg";
import BannerTwo from "../../img/home2.jpg";
import BannerThere from "../../img/home3.png";
// Start Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
    return (
        <>
            <div className="main-banner pos-relative">
                <div className="banners">
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper">
                        <SwiperSlide className="banner-one">
                            <div className="img">
                                <img src={SliderOne} alt="" />
                            </div>
                            <div className="container">
                                <div className="banner-info pos-absolute zi-999">
                                    <div className="info">
                                        <h1 className="c-fff fw-500 line-h-1-half">Furniture Life</h1>
                                        <p className="c-fff mb-25 maxw-100">
                                            Learning is cool, but knowing is better, and I know the
                                            key to success
                                        </p>
                                    </div>
                                    <div className="button">
                                        <button
                                            className="btn-transparent c-fff flex-center gap-10 fw-500"
                                        >
                                            View more
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="banner-two">
                            <div className="img">
                                <img src={SliderTwo} alt="" />
                            </div>
                            <div className="container">
                                <div className="banner-info pos-absolute">
                                    <div className="info">
                                        <h1 className="c-fff fw-500 line-h-1-half">Summer Sale</h1>
                                        <p className="c-fff mb-25 maxw-100">
                                            Learning is cool, but knowing is better, and iknow the key
                                            to success
                                        </p>
                                    </div>
                                    <div className="button">
                                        <button
                                            className="btn-transparent c-fff flex-center gap-10 fw-500 mx-auto"
                                        >
                                            Shop Now
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="other-banners flex-center flex-wrap">
                <div className="image w-3-col pos-relative over-hidden md-w-full">
                    <img src={BannerOne} alt="" />
                </div>
                <div className="image w-3-col pos-relative over-hidden md-w-full">
                    <img src={BannerTwo} alt="" />
                </div>
                <div className="image w-3-col pos-relative over-hidden md-w-full">
                    <img src={BannerThere} alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner