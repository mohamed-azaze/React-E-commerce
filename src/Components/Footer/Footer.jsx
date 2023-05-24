import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container" style={{ "padding": "50px 25px 30px" }}>
                    <div className="row d-flex justify-between align-start md-flex-wrap">
                        <div className="col w-5-col md-w-3-col sm-w-full">
                            <div className="header fz-25 fw-500 c-fff mb-20 lg-fz-17">About us</div>
                            <ul>
                                <li className="c-fff fz-15 mb-20 maxw-100 xl-line-h-1-half">
                                    PO Box 12300 Collins Street, Victoria 9000
                                </li>
                                <li className="c-fff fz-15 mb-20">(+00) 1234 5678 90</li>
                                <li className="c-fff fz-15 mb-20">email@2020.com</li>
                            </ul>
                        </div>
                        <div className="col w-5-col md-w-3-col sm-w-full">
                            <div className="header fz-25 fw-500 c-fff mb-20 lg-fz-17">Customer</div>
                            <ul>
                                <li className="fz-15 mb-20 c-fff transition-04s">About us
                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">Brands
                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">Contact us
                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">FAQs
                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">Search
                                </li>
                            </ul>
                        </div>
                        <div className="col w-5-col md-w-3-col sm-w-full">
                            <div className="header fz-25 fw-500 c-fff mb-20 lg-fz-17">Product</div>
                            <ul>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    Orders

                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    Downloads

                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    Addresses

                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    Account Details

                                </li>
                            </ul>
                        </div>
                        <div className="col w-5-col md-w-3-col sm-w-full">
                            <div className="header fz-25 fw-500 c-fff mb-20 lg-fz-17">
                                My Account
                            </div>
                            <ul>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    The board
                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    Accessories

                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    FAQs

                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    Terms & Conditions

                                </li>
                                <li className="fz-15 mb-20 c-fff transition-04s">
                                    Wishlist

                                </li>
                            </ul>
                        </div>
                        <div className="col w-5-col md-w-3-col sm-w-full">
                            <div className="header fz-25 fw-500 c-fff mb-20 lg-fz-17">
                                Subscribe us
                            </div>
                            <p className="maxw-100 c-fff mb-20 line-h-1-half">
                                Promotions, new products and sales. Directly to your inbox.
                            </p>
                            <div className="input pos-relative">
                                <input
                                    className="ol-none border-none w-full border-r-5 place-none fz-17"
                                    type="email"
                                    placeholder="Your Email"
                                />
                                <div className="send-btn pos-absolute flex-center cursor-pointer">
                                    <i className="fa-solid fa-chevron-right c-fff"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="creater bg-000 txt-center py-20">
                    <p className="c-fff fz-15">&copy; 2022, Surprise. Powered by Shopify</p>
                </div>
            </div>
        </>
    )
}

export default Footer