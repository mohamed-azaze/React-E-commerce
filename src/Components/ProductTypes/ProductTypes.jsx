import React, { useEffect } from 'react'
import ProductTypeCard from './ProductTypeCard/ProductTypeCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Store/ProductSlice'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './ProductTypes.css'
// import required modules
import { Pagination } from "swiper";
// images
import image1 from "../../img/Trend Image/row two/trendrowtwo1.jpg"
import image2 from "../../img/Trend Image/row two/trendrowtwo2.jpg"
import image3 from "../../img/Trend Image/row two/trendrowtwo3.jpg"
import image4 from "../../img/Trend Image/row two/trendrowtwo4.jpg"
import image5 from "../../img/Trend Image/row two/trendrowtwo5.jpg"

const ProductTypes = () => {

    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(getProducts())
        }
    }, [dispatch])

    return (
        <>
            <div className='container productType' style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper productTypes"

                >
                    <SwiperSlide>
                        <ProductTypeCard image={image1} name={"Stools"} length={products.length} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductTypeCard image={image2} name={"Table"} length={products.length} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductTypeCard image={image3} name={"Desk Lamps"} length={products.length} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductTypeCard image={image4} name={"Wall Sconces"} length={products.length} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductTypeCard image={image5} name={"Living room"} length={products.length} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default ProductTypes