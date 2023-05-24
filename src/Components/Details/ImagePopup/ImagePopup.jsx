import React from 'react'
import './ImagePopup.css'
const ImagePopup = ({ image }) => {


    const closePopup = (e) => {
        e.target.parentElement.classList.remove("active")
    }

    return (
        <>
            <div
                onClick={closePopup}
                className=' popup pos-fixed top-0 left-0 zi-999 w-full h-full bg-00005'
                style={{ "cursor": "zoom-out" }}
            >
                <div className='h-full flex-center'>
                    <img
                        style={{ "cursor": "default" }}
                        src={image}
                        alt="" />
                </div>
            </div>
        </>
    )
}

export default ImagePopup