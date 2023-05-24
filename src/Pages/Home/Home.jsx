import React from 'react'
import Banner from '../../Components/Banner/Banner';
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';
import NewProduct from '../../Components/NewProduct/NewProduct';
import Prand from '../../Components/Prand/Prand';
import ProductTypes from '../../Components/ProductTypes/ProductTypes';
import Trend from '../../Components/Trend/Trend';


const Home = () => {
    document.title = `Surprise`



    return (
        <>
            <NavBar />
            <Banner />
            <Trend />
            <ProductTypes />
            <NewProduct />
            <FeaturedProduct />
            <Prand />
            <Footer />
        </>
    )
}

export default Home