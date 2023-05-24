import React from 'react'
import './Wishlist.css'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Path from '../../Components/Path/Path'
import Heading from '../../Components/Heading/Heading'
import WishlistProduct from '../../Components/WishlistProduct/WishlistProduct'

const Wishlist = () => {
    document.title = `Wishlist – Surprise`

    return (
        <>
            <NavBar />
            <Path Path={[{ name: "Wishlist" }]} />
            <div className="heading" style={{ paddingTop: "60px", margin: "0" }}>
                <Heading SectionTitle={"Wishlist"} />
            </div>
            <WishlistProduct />
            <Footer />
        </>
    )
}

export default Wishlist