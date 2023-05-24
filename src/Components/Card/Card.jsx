import React, { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addfavProduct, deleteFavProduct } from "../../Store/FavProductSlice"
import { getAllOrder, addOrder, updateOrder } from "../../Store/CheckOutSlice"
import Loading from '../Loading/Loading'
import './Card.css'



const Card = ({ product }) => {
    const { orders, isLoading } = useSelector((state) => state.orders)
    const [allOrder, setAllOrder] = useState([])

    const disPatch = useDispatch()
    const percent = "%"
    const favProductEle = useRef()

    useEffect(() => {
        const correctEle = favProductEle.current;
        const favProductsId = JSON.parse(localStorage.getItem("fav"));
        if (favProductsId && favProductsId.length > 0) {
            favProductsId.forEach(id => {
                if (product.id === +id) {
                    correctEle.classList.add("fa-solid")
                } else {
                    correctEle.classList.add("fa-regular")
                }
            });
        } else {
            correctEle.classList.add("fa-regular")
        }

    }, [product.id,])


    const addFavProduct = (e) => {
        if (e.target.classList.contains("fa-regular") && !e.target.classList.contains("fa-solid")) {
            disPatch(addfavProduct(e.target.parentElement.dataset.id))
        } else {
            disPatch(deleteFavProduct(e.target.parentElement.dataset.id))
        }
        if (e.target.classList.contains("fa-regular")) {
            e.target.classList.toggle("fa-solid")
        } else { e.target.classList.toggle("fa-regular") }
    }

    useEffect(() => {
        disPatch(getAllOrder())

    }, [disPatch, allOrder])
    const activeUser = JSON.parse(localStorage.getItem("isActive")).filter(user => user.isActive)

    const addToOrderList = useCallback((uesrId, productId, currectProduct) => {
        setAllOrder(orders)
        if (activeUser.length > 0) {
            const correctUesr = orders.filter(order => order.user_id === uesrId)
            if (correctUesr.length > 0) {
                const userOrders = correctUesr[0].products.filter(product => product.product_id === currectProduct.id)
                if (userOrders.length > 0) {
                    let productCount = userOrders[0].product_Count;
                    disPatch(updateOrder({
                        id: correctUesr[0].id,
                        products: [
                            ...correctUesr[0].products.filter(product => product.product_id !== currectProduct.id),
                            {
                                product_id:
                                    userOrders[0].product_id,
                                currectProduct: currectProduct,
                                product_Count: productCount += 1
                            }
                        ]
                    }))
                } else {
                    disPatch(updateOrder({
                        id: correctUesr[0].id,
                        products: [
                            ...correctUesr[0].products,
                            {
                                product_id:
                                    currectProduct.id,
                                currectProduct: currectProduct,
                                product_Count: 1
                            }
                        ]
                    }))
                }
            } else {
                disPatch(addOrder({
                    "user_id": uesrId,
                    "products": [{ "product_id": productId, currectProduct: currectProduct, "product_Count": 1 }]
                }))
            }
        }



    }, [activeUser.length, disPatch, orders])



    return (
        <>
            <div className="col product " key={product.id}>
                <div className="product-image pos-relative cursor-pointer">
                    <Link to={`/${product.id}`} >
                        <div className="image">
                            <img
                                className="lg-minw-100"
                                src={product.imageOne}
                                alt=""
                            />
                        </div>
                    </Link>
                    <div className="offer pos-absolute top-10 left-15 zi-99" style={{ "color": "#222222" }}>
                        <span>{`${product.Discount ? `${-product.Discount}${percent}` : " "}`}</span >
                    </div>
                    <div
                        onClick={addFavProduct}
                        className="add-wishlist pos-absolute top-10 right-15 zi-9999 bg-fff border-r-50 cursor-pointer opacity-07 opacity-haver-1 transition-2"
                        style={{ "color": "#222222" }}
                        data-title="Add to Wishlist"
                        data-id={product.id}
                    >
                        <i
                            ref={favProductEle}
                            style={{ "padding": "10px 10px" }}
                            className="fa-regular fa-heart fz-17"></i>
                    </div>
                    <div
                        className="options flex-between gap-15 pos-absolute translateXY-center zi-99"
                    >
                        {activeUser.length > 0 ?
                            <div
                                onClick={() => addToOrderList(activeUser.length > 0 ? activeUser[0].id : false, product.id, product)}
                                className="add-to-cart flex-center border-r-5 cursor-pointer"
                                data-title="Add to Cart"
                            >
                                {isLoading ? <Loading /> :
                                    <i className="fa-solid fa-bag-shopping fz-17 c-fff"></i>
                                }
                            </div>
                            : <Link to={"/login"}>

                                <div

                                    className="add-to-cart flex-center border-r-5 cursor-pointer"
                                    data-title="Add to Cart"
                                >
                                    {isLoading ? <Loading /> :
                                        <i className="fa-solid fa-bag-shopping fz-17 c-fff"></i>
                                    }
                                </div>
                            </Link>}

                        <div
                            className="review flex-center border-r-5 cursor-pointer"
                            data-title="Review"
                        >
                            <i className="fa-regular fa-eye fz-17 c-fff"></i>
                        </div>
                        <div
                            className="compare flex-center border-r-5 cursor-pointer"
                            data-title="Compare"
                        >
                            <i className="fa-solid fa-arrows-rotate fz-17 c-fff"></i>
                        </div>
                    </div>
                </div>

                <div className="product-price txt-center mt-15">
                    <div className="product-name">
                        <span>{product.name}</span>
                    </div>
                    <div className="product-price mt-5">
                        <span
                        ><del className="opacity-07" style={{ "marginRight": "2px" }}>
                                {product.Discount ? "$" + product.Price + ".00" : ""}</del></span>
                        <span className="fw-bold" style={{ "marginLeft": "2px" }}>${product.Discount ? Math.floor(product.Price - (product.Price * product.Discount / 100)) : product.Price}.00</span>
                    </div >
                </div >
            </div>
        </>
    )
}

export default Card