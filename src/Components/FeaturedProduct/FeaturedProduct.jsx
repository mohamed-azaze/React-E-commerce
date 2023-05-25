import React from 'react'
import './FeaturedProduct.css'
import Heading from '../Heading/Heading'
import FeatProducts from './FeatProducts/FeatProducts'
import { useState } from 'react'


const FeaturedProduct = () => {
    const [featuredType, setFeaturedType] = useState("Wall Sconces")
    const showCategory = (e) => {
        const categoryLinks = document.querySelectorAll(".nav-item ul li")
        categoryLinks.forEach(link => {
            link.classList.remove("active")
        })
        e.target.classList.add("active")
        setFeaturedType(e.target.dataset.product)
    }




    return (
        <>
            <div className="container pos-relative" style={{ paddingTop: "60px", paddingBottom: "30px" }}>
                <Heading SectionTitle={"Featured Products"} />
                <div className="nav-item pb-20">
                    <ul className="flex-center gap-25 " id="category-links">
                        <li onClick={showCategory}
                            className="active fw-bold cursor-pointer"
                            data-product="Wall Sconces"
                            style={{ "color": "#999" }}
                        >
                            Wall Sconces
                        </li>
                        <li onClick={showCategory}
                            className="fw-bold cursor-pointer"
                            data-product="Desk Lamps"
                            style={{ "color": "#999" }}>
                            Desk Lamps
                        </li>
                        <li onClick={showCategory}
                            className="fw-bold cursor-pointer"
                            data-product="Desk Lamps"
                            style={{ "color": "#999" }}>
                            Living room
                        </li>
                    </ul>
                </div>
                <FeatProducts productType={featuredType} />
            </div>
        </>
    )
}

export default FeaturedProduct