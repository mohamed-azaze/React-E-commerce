import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../Store/ProductSlice'
import Slider from "react-slick";
import Card from "../../Card/Card"
import './FeatProducts.css'

const FeatProducts = ({ productType }) => {

    const { products } = useSelector((state) => state.products);
    const disPatch = useDispatch();

    useEffect(() => {
        return () => {
            disPatch(getProducts())
        }
    }, [disPatch])
    const filterProduct = products.filter((product) => product.Category === productType);
    const productItem = filterProduct.map((product, indx) => (
        <Card product={product} key={indx} />
    ))
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    return (
        <div  >
            <Slider {...settings} >
                {productItem}
            </Slider>
        </div >

    )
}

export default FeatProducts