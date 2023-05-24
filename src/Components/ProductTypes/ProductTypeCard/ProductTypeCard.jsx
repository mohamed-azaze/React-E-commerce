import React from 'react'
const ProductTypeCard = ({ image, name, length }) => {

    return (
        <>
            <div className="col product swiper-slide">
                <div className="product-image maxw-100 over-hidden">
                    <img
                        className="sm-minw-100"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="product-stock mt-25 txt-center">
                    <div className="product-name">{name}</div>
                    <span className="product-stock mt-10 d-block" style={{ "color": "#666" }}
                    >
                        {length} Products
                    </span>
                </div>
            </div>
        </>
    )
}

export default ProductTypeCard