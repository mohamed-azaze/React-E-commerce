import React from 'react'
import './Heading.css'
const Heading = ({ SectionTitle }) => {
    return (
        <>
            <div className="heading ">
                <h2 className='txt-center'>{SectionTitle}</h2>
            </div>
        </>
    )
}

export default Heading