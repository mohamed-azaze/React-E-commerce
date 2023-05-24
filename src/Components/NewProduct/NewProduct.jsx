import React from 'react'
import "./NewProduct.css"
import image1 from '../../img/Trend Image/row Three/trendrowthree1.jpg'
import image2 from '../../img/Trend Image/row Three/trendrowthree2.jpg'
import image3 from '../../img/Trend Image/row Three/trendrowthree3.jpg'
const NewProduct = () => {
    return (
        <>
            <div className="container" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                <div
                    className="newProduct px-25 flex-between lg-flex-wrap gap-20 lg-gap-15"
                >
                    <div
                        className="col product-image over-hidden lg-w-48 lg-mb-15 md-w-full"
                    >
                        <img
                            className="minw-100"
                            src={image1}
                            alt=""
                        />
                    </div>
                    <div
                        className="col product-image over-hidden lg-w-48 lg-mb-15 md-w-full"
                    >
                        <img
                            className="minw-100"
                            src={image2}
                            alt=""
                        />
                    </div>
                    <div className="col product-image over-hidden lg-w-48 md-w-full">
                        <img
                            className="minw-100"
                            src={image3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProduct