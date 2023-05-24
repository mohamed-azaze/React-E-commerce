import React, { useEffect } from 'react'
import Card from '../Card/Card'
import Heading from '../Heading/Heading'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Store/ProductSlice'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import './Trend.css'



const Trend = () => {
    const { products } = useSelector((state) => state.products)
    const despatch = useDispatch();

    useEffect(() => {
        despatch(getProducts())
    }, [despatch])

    const productWithDiscount = products.filter((product) => product.Discount)
    const cardProduct = productWithDiscount.map((product) => (
        <SwiperSlide key={product.id}>
            <Card product={product} />
        </SwiperSlide>
    ))

    return (
        <>
            <div className='tranding' style={{ paddingTop: "100px", paddingBottom: "30px" }}>
                <Heading SectionTitle="Tranding" />
                <div className="container ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        navigation={true}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            767: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            991: {
                                slidesPerView: 2,
                                slidesPerGroup: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        style={{ "padding": "25px" }}
                    >
                        {cardProduct}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Trend