import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Store/ProductSlice'
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Path from '../../Components/Path/Path';
import Details from '../../Components/Details/Details';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';

const ProductDetails = () => {
    const { id } = useParams()
    const { products } = useSelector((state) => state.products)
    const disPatch = useDispatch()


    useEffect(() => {
        disPatch(getProducts())
    }, [disPatch])
    const correctProduct = products.filter((product) => product.id === +id)
    if (correctProduct.length > 0) {
        document.title = `${correctProduct[0].name} – Surprise`
    }

    return (
        <>
            <ScrollToTop />
            <NavBar />
            {correctProduct.length > 0 ?
                <>
                    <Path Path={correctProduct} />
                    <Details Product={correctProduct} />
                </> : ""}

            <Footer />
        </>
    )
}

export default ProductDetails


