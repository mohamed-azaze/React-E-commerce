import React from 'react'
import './ResetPasswordForm.css'
import { Link } from 'react-router-dom'
const ResetPasswordForm = () => {

    const resetPassword = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div
                className="reset-form"
                style={{ "paddingTop": "100px", "paddingBottom": "100px" }}
            >
                <div className="container">
                    <div className="form flex-center flex-dir-column txt-center">
                        <div className="form-header">
                            <h5 className="mb-15 fw-normal">Reset your password</h5>
                            <span className="mb-15 d-block fz-15" style={{ "color": "#666666" }}
                            >We will send you an email to reset your password.
                            </span>
                        </div>
                        <form className="maxw-100" onSubmit={resetPassword}>
                            <div className="input-group w-400 maxw-100">
                                <input
                                    className="ol-none border-none place-none mb-10 py-15 px-15"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div
                                className="input-group w-400 maxw-100 pos-relative cursor-pointer"
                            >
                                <input
                                    className="ol-none border-none place-none mb-10 py-10 c-fff ff-inherit fz-17 border-r-5"
                                    type="submit"
                                    value="Submit"
                                />
                            </div>
                        </form>
                        <div className="cancel-reset mt-15">
                            <Link to={"/login"}>
                                <span className="fz-17 fw-500" >
                                    Cancel
                                </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordForm