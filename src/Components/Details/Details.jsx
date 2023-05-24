import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addfavProduct, deleteFavProduct } from "../../Store/FavProductSlice"
import ImagePopup from './ImagePopup/ImagePopup';
import './Details.css'

const Details = ({ Product }) => {

    const [mainImage, setMainImage] = useState(Product[0].imageOne)

    const favProductEle = useRef()
    const disPatch = useDispatch()
    let result;
    let price;


    const disCountHander = () => {
        if (Product[0].Discount) {
            price = `$${Product[0].Discount ? Product[0].Price : ""}.00   `
            result = `${Math.floor(Product[0].Price - (Product[0].Price * Product[0].Discount / 100))}`
        } else {
            result = Product[0].Price
        }
    }; disCountHander();
    const showImage = (e) => { setMainImage(e.target.src) }
    const showPopup = () => { document.querySelector(".img-popup > div").classList.add("active") }


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
        const correctEle = favProductEle.current;
        const favProductsId = JSON.parse(localStorage.getItem("fav"));

        if (favProductsId && favProductsId.length > 0) {
            favProductsId.forEach(id => {
                if (Product[0].id === +id) {
                    correctEle.classList.add("fa-solid")
                } else {
                    correctEle.classList.add("fa-regular")
                }
            });
        } else {
            correctEle.classList.add("fa-regular")
        }

    }, [Product])



    return (
        <>
            <div className="img-popup">
                <ImagePopup image={mainImage} />
            </div>
            <div className="container details">
                <div
                    className="row d-flex align-start justify-center gap-20 md-flex-wrap sm-px-5"
                    style={{ "padding": "50px 0" }}
                    data-details="product-details-container"
                    id="product-details-container"
                >
                    <div className="col w-2-col md-w-full">
                        <div className="row">
                            <div className="product-image pos-relative">
                                <div
                                    className="add-icons pos-absolute top-15 right-15 flex-center flex-dir-column gap-15"
                                >
                                    <div
                                        onClick={addFavProduct}
                                        className="add-wishlist"
                                        data-title="Add to Wishlist"
                                        data-id={Product[0].id}
                                    >

                                        <i
                                            ref={favProductEle}
                                            className="fa-regular fa-heart fz-20 bg-fff p-10 border-r-50 cursor-pointer"
                                        ></i>
                                    </div>
                                    <div className="compare" data-title="Compare">
                                        <i
                                            className="fa-solid fa-arrows-rotate fz-20 bg-fff p-10 border-r-50 cursor-pointer"
                                        ></i>
                                    </div>
                                </div>

                                <img
                                    onClick={showPopup}
                                    className="minw-100"
                                    style={{ "cursor": "zoom-in" }}
                                    src={mainImage}
                                    alt=""
                                />

                            </div>
                        </div>
                        <div className="row mt-15">
                            <div
                                className="product-images d-flex align-center justify-start gap-15"
                            >

                                <img
                                    onClick={showImage}
                                    className='cursor-pointer'
                                    style={{ "width": "180px" }}
                                    src={Product[0].imageOne}
                                    alt=""
                                />
                                <img
                                    onClick={showImage}
                                    className='cursor-pointer'
                                    style={{ "width": "180px" }}
                                    src={Product[0].imageTwo}
                                    alt=""
                                />

                            </div>
                        </div>
                    </div>
                    <div className="col w-2-col md-w-full">
                        <div className="row prdouct-name">
                            <h4 className="fw-normal mb-15 sm-fz-25" style={{ "fontSize": "40px" }}>
                                {Product[0].name}
                            </h4>
                            <span className="price fz-25 fw-bold sm-fz-20">
                                <del className=' fz-17 fw-normal' style={{ "color": "#999" }}>{price}</del>
                                ${result}.00
                            </span>
                        </div>
                        <div className="line-full mt-15"></div>
                        <div
                            className="row d-flex align-center justify-start gap-10 my-15 sm-flex-wrap sm-justify-center"
                        >
                            <div
                                className="product-number-cart flex-center"
                                style={{ "width": "fill content" }}
                            >
                                <span
                                    className="fz-25 borderr-1-ddd cursor-pointer flex-center fw-normal bg-layer-hover"
                                    style={{ "backgroundColor": "#f4f4f4", "width": "30px", "height": "50px" }}
                                >-</span>
                                <span className="p-15 fw-normal" style={{ "backgroundColor": "#f4f4f4" }}
                                >5</span>
                                <span
                                    className="fz-25 borderl-1-ddd cursor-pointer flex-center fw-normal bg-layer-hover"
                                    style={{ "backgroundColor": "#f4f4f4", "width": "30px", "height": "50px" }}
                                >+</span>
                            </div>
                            <button
                                className="btn-transparent"
                                style={{ "color": "#000", "border": "2px solid #222222", "width": "100%" }}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="line-full"></div>
                        <div
                            className="row product-details my-15 flex-center flex-dir-column line-h-1-8"
                        >
                            <p className="fw-bold">Vendor:<span className="fw-normal"> 2020</span></p>
                            <p className="fw-bold">Type:<span className="fw-normal"> Decor</span></p>
                            <p className="fw-bold">Sku:<span className="fw-normal"> null</span></p>
                            <p className="fw-bold">
                                Available:<span className="fw-normal"> Available</span>
                            </p>
                        </div>
                        <div className="line-full"></div>
                        <div
                            className="row social my-15 d-flex justify-end align-center gap-15">
                            <Link to="https://www.facebook.com/" target={"_blank"}>
                                <i className="fs fa-brands fa-facebook-f fz-20 cursor-pointer"></i>
                            </Link>
                            <Link to="https://twitter.com/" target={"_blank"}>

                                <i className="fs fa-brands fa-twitter fz-20 cursor-pointer"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="row sm-px-5"
                    style={{ "paddingTop": "80px", "paddingBottom": "80px" }}
                >
                    <div className="header">
                        <div className="description fz-20 pl-10 pos-relative w-fill">
                            Description
                        </div>
                    </div>
                    <div className="line-full my-10"></div>
                    <div className="desc-info">
                        <p className="my-15 pl-15" style={{ "color": "#666666" }}>
                            A classNameic 5-panel hat with our United By Blue logo on the front
                            and an adjustable strap to keep fit and secure. Made with recycled
                            polyester and organic cotton mix.
                        </p>
                        <ul>
                            <li className="d-flex align-center justify-start gap-10">
                                <span></span>
                                Materiaal: 100% katoen
                            </li>
                            <li className="d-flex align-center justify-start gap-10">
                                <span></span>
                                Stretch: Mid-weight materiaal met stretch
                            </li>
                            <li className="d-flex align-center justify-start gap-10">
                                <span></span>
                                Wasvoorschrift: Maximaal op 30º
                            </li>
                            <li className="d-flex align-center justify-start gap-10">
                                <span></span>
                                Strijkvoorschrift: Warm strijken ( max. 110º)
                            </li>
                            <li className="d-flex align-center justify-start gap-10">
                                <span></span>
                                Droogvoorschrift: Drogen bij een lage temperatuur
                            </li>
                            <li className="d-flex align-center justify-start gap-10">
                                <span></span>
                                Chemisch reinigen: Chemisch reinigen door stomerij
                            </li>
                            <li className="d-flex align-center justify-start gap-10">
                                <span></span>
                                Artikel: 711407001740176
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details