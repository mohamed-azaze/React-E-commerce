import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../Store/ProductSlice'
import { deleteFavProduct } from '../../Store/FavProductSlice'
import './WishlistProduct.css'


const WishlistProduct = () => {
    const [favProduct, setFavProduct] = useState([])
    const { products } = useSelector((state) => state.products)
    const { favProducts } = useSelector((state) => state.favProducts)
    const disPatch = useDispatch()

    useEffect(() => { disPatch(getProducts()) }, [disPatch, favProducts])
    useEffect(() => {
        const finelArr = []
        const localStorageList = JSON.parse(localStorage.getItem("fav"))
        for (let i = 0; i < products.length; i++) {
            for (let j = 0; j < localStorageList.length; j++) {
                if (products[i].id === +localStorageList[j]) {
                    finelArr.push(products[i])
                }
            }
        }
        setFavProduct(finelArr)

    }, [products])


    const viewFavProduct = favProduct.map((product) => (
        <React.Fragment key={product.id}>
            <div className="product pos-relative mb-25">
                <div
                    onClick={() => disPatch(deleteFavProduct(product.id.toString()))}
                    className="close-icon pos-absolute flex-center border-r-5 cursor-pointer"
                    style={{ "backgroundColor": "#222", "width": "40px", "height": "40px" }}
                >
                    <i className="fa fa-close c-fff fz-25"></i>
                </div>
                <div className="product-image">
                    <Link to={`/${product.id}`}>
                        <img src={product.imageOne} alt="" />
                    </Link>
                </div>
                <div className="product-name-price">
                    <div className="name mt-15 fz-20">{product.name}</div>
                    <div className="price mt-10 fz-17"><span
                    ><del className="opacity-07" style={{ "marginRight": "2px" }}>
                            {product.Discount ? "$" + product.Price + ".00" : ""}</del></span>
                        <span className="fw-bold" style={{ "marginLeft": "2px" }}>${product.Discount ? Math.floor(product.Price - (product.Price * product.Discount / 100)) : product.Price}.00</span></div>
                </div>
            </div>
        </React.Fragment>
    ))

    return (
        <>
            <div className="container">
                {viewFavProduct.length > 0 ?
                    <div className="grid">
                        {viewFavProduct}
                    </div>
                    : <div className='no-data txt-center w-fill my-25 mx-auto py-15 px-15 border-r-5' >There are no products in your wishlist!</div>
                }

            </div>
        </>
    )
}

export default WishlistProduct