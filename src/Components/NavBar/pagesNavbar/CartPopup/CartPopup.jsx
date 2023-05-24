import React from 'react'
import { Link } from 'react-router-dom'
import { getAllOrder, updateOrder } from "../../../../Store/CheckOutSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { useState } from 'react'

const CartPopup = ({ currectOrders }) => {
    const { orders } = useSelector((state) => state.orders)
    const [allOrder, setAllOrder] = useState([])
    const disPatch = useDispatch()

    const activeUser = JSON.parse(localStorage.getItem("isActive")).filter(user => user.isActive)

    useEffect(() => {
        disPatch(getAllOrder())
    }, [allOrder, disPatch])
    const removeItem = (uesrId, currectproduct) => {
        setAllOrder(orders)
        const correctUesr = orders.filter(order => order.user_id === uesrId)
        disPatch(updateOrder({
            id: correctUesr[0].id,
            products: [
                ...correctUesr[0].products.filter(product => product.product_id !== currectproduct.product_id)
            ]
        }))
    }

    const viewPrductCart = currectOrders.map((product, index) => (
        <React.Fragment key={index}>
            <div>
                <div className="flex-between px-15 mb-15">
                    <Link to={`/${product.currectProduct.id}`} >
                        <div className="image">
                            <img
                                style={{ width: "70px" }}
                                src={product.currectProduct.imageOne}
                                alt=""
                            />
                        </div>
                    </Link>
                    <div
                        className="name-price flex-center flex-dir-column"
                    >
                        <span>{product.currectProduct.name}</span>
                        <span
                            className='mt-5 fz-15'
                            style={{ color: "#666", fontSize: "13px" }}
                        >${product.currectProduct.Discount ?
                            Math.floor(product.currectProduct.Price - (product.currectProduct.Price * product.currectProduct.Discount / 100)) :
                            product.currectProduct.Price}.00
                            <span
                                className='fw-700 fz-17'
                            > x {product.product_Count}</span></span>
                    </div>
                    <div
                        onClick={() => removeItem(activeUser[0].id, product)}
                        className="remove-product cursor-pointer"
                    >
                        <span>X</span>
                    </div>
                </div>
            </div>
        </React.Fragment >
    ))



    return (
        <>
            {viewPrductCart}
        </>
    )
}

export default CartPopup