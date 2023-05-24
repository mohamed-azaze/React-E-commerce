import React, { useRef, useState, useEffect } from 'react'
import { getAllOrder } from '../../../Store/CheckOutSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartPopup from './CartPopup/CartPopup';
import Logo from '../../../img/logo.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaSearch, FaCaretDown, FaCreditCard } from 'react-icons/fa'
import './PagesNavbar.css'



const PagesNavbar = () => {
    const { orders } = useSelector((state) => state.orders)
    const [allOrders, setAllOrders] = useState([])
    const [currectOrders, setCurrectOrders] = useState([])

    const disPatch = useDispatch()
    const searchInput = useRef()

    const viewSearchInput = () => {
        searchInput.current.classList.toggle("active");
    }

    useEffect(() => {
        disPatch(getAllOrder())
    }, [disPatch])
    const activeUser = JSON.parse(localStorage.getItem("isActive")).filter(user => user.isActive)
    useEffect(() => {
        return () => {
            setAllOrders(orders)
            if (activeUser.length > 0) {
                const userOrders = orders.filter(order => order.user_id === activeUser[0].id);
                if (userOrders.length > 0) {
                    setCurrectOrders(userOrders[0].products)
                }
            }

        }
    }, [activeUser, orders, allOrders, disPatch])


    let totalPrice = 0;
    let counter = 0;
    const totalPriceHandler = () => {
        for (let i = 0; i < currectOrders.length; i++) {
            counter += currectOrders[i].product_Count
            totalPrice += currectOrders[i].currectProduct.Discount ?
                (Math.floor(currectOrders[i].currectProduct.Price - (currectOrders[i].currectProduct.Price * currectOrders[i].currectProduct.Discount / 100))) * (currectOrders[i].product_Count)
                : (currectOrders[i].currectProduct.Price) * (currectOrders[i].product_Count)
        }
    }
    totalPriceHandler()


    return (
        <>
            <div className="container">
                <div className="navbar flex-between px-25">
                    <div className="main-menu d-none">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="nav-logo flex-center gap-25">
                        <div className="logo" style={{ "marginRight": "70px" }}>
                            <img src={Logo} alt="" />
                        </div>
                        <nav className=" pages-links pos-relative">
                            <ul className="flex-center gap-25 lg-gap-0" style={{ "marginLeft": "50px" }}>
                                <li
                                    className='cursor-pointer fw-700 transition-04s c-000'>
                                    <Link to={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li className='cursor-pointer fw-700 transition-04s d-flex'>
                                    Megamenu
                                    <FaCaretDown style={{ "fontSize": "17px", "marginTop": "2px" }} />
                                </li>
                                <li className='cursor-pointer fw-700 transition-04s d-flex'>
                                    Layouts
                                    <FaCaretDown style={{ "fontSize": "17px", "marginTop": "2px" }} />
                                </li>
                                <li
                                    className='cursor-pointer fw-700 transition-04s'
                                >
                                    FAQs
                                </li>
                                <li
                                    className='cursor-pointer fw-700 transition-04s'
                                >
                                    Download now!
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="cart-search d-flex align-center gap-25">
                        <div className="search pos-relative cursor-pointer"
                        >
                            <div
                                className="search-input pos-absolute  zi-99"
                                style={{ "top": "-15px", "right": "-10px" }}
                            >
                                <input
                                    ref={searchInput}
                                    className='ol-none border-none w-none opacity-0 place-none
                                     border-r-5 bg-ddd py-5 px-10 ff-inherit fz-17 transition-04s'
                                    type="text"
                                    style={{ "height": "50px" }}
                                    placeholder='Search'
                                />
                            </div>
                            <FaSearch
                                onClick={() => viewSearchInput()}
                                className='search-icon fz-20 transition-04s pos-relative zi-99'
                                style={{ "color": "#666666" }}

                            />
                        </div>
                        <div className="cart pos-relative ">
                            <div className="cart-popup pos-absolute zi-999 right-0  bg-fff">
                                <div
                                    className="cart-products py-20 "
                                >
                                    {currectOrders.length > 0 ?
                                        <CartPopup currectOrders={currectOrders} />
                                        :
                                        <div
                                            className='flex-center'
                                            style={{ "height": "45px" }}
                                        >Your cart is currently empty.</div>}
                                </div>
                                <div className="totel-price c-000 fw-700  fz-15 txt-center pt-15" style={{ color: "#222" }}>
                                    <span className='fw-normal' style={{ color: "#666" }}>Total: </span>
                                    ${totalPrice}
                                </div>
                                <div className="buttons flex-center gap-10 my-10">
                                    <button className='btn-222'>Updata Cart</button>
                                    <button className='btn-222 flex-center gap-5' >
                                        <FaCreditCard />
                                        Check Out
                                    </button>
                                </div>
                                <div className="tax pt-5 pb-20 txt-center">
                                    Taxes and Shipping calculated at Checkout
                                </div>
                            </div>
                            <AiOutlineShoppingCart
                                className='cart-icon transition-04s cursor-pointer'
                                style={{ "fontSize": "23px", "color": "#666666" }}
                            />
                            <span className='pos-absolute flex-center fz-15 c-fff'>{counter}</span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PagesNavbar


