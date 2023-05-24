import React from 'react'
import './Loading.css'
const Loading = () => {
    return (
        <>
            <div className="loading-container w-full mh-100v flex-center">
                <div className='isLoading flex-center  w-300 h-full'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}

export default Loading