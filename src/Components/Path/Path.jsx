import React from 'react'
import { Link } from 'react-router-dom'

const Path = ({ Path }) => {
    return (
        <>
            <div style={{ "backgroundColor": "#f4f4f4" }}>
                <div className="container">
                    <div className="path" style={{ "padding": "40px 0" }}>
                        <span className="fw-700">
                            <Link to={"/"} style={{ "color": "#000" }}>
                                Home
                            </Link>
                        </span>
                        <span>
                            <Link to={"/"} style={{ "color": "#000" }}>
                                {` ${Path[0].Category ? ` > ${Path[0].Category} ` : ""}`}
                            </Link>
                        </span>
                        <span style={{ "color": "#999" }}>
                            {` > ${Path[0].name ? Path[0].name : ""}`}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Path