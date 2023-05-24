import React from 'react'

const InputFiledError = ({ massege, top }) => {
    return (
        <>
            <div
                className='pos-absolute top-half left-half translateX-center zi-999 
                 py-15 px-20 border-r-5 fz-17 c-fff '
                style={{ "backgroundColor": "#de2a2a", "top": `${top}` }}
            >
                <div>{massege}</div>
            </div>
        </>
    )
}

export default InputFiledError