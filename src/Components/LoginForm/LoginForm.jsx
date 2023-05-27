import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from "../../Store/UsersSlice"
import InputFiledError from '../InputFiledError/InputFiledError'
import "./LoginForm.css"


const LoginForm = () => {
    const { users } = useSelector((state) => state.users)
    const [errorMessage, setErrorMessage] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [correctUesr, setCorrectUesr] = useState({});

    const email = useRef()
    const password = useRef()
    const messageEle = useRef()
    const header = useRef()

    const disPatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        disPatch(getUsers())
    }, [disPatch])

    useEffect(() => {
        setCorrectUesr(...users.filter(uesr => uesr.email === loginEmail))
    }, [loginEmail, users])


    const loginHeader = (e) => {
        e.preventDefault()
        if (correctUesr === undefined) {
            setErrorMessage("This Email is not Correct")
            header.current.style = "margin-bottom:35px"
            messageEle.current.classList.add("active")
        } else if (correctUesr.email === email.current.value && correctUesr.password !== password.current.value) {
            setErrorMessage("This Password is not Correct, if You Forget Password, you can reset your password")
            header.current.style = "margin-bottom:60px"
            messageEle.current.classList.add("active")
        } else {
            const oldusers = JSON.parse(localStorage.getItem("isActive"))
            if (oldusers) {
                const user = oldusers.filter(user => user.id === correctUesr.activeID)
                if (user.length > 0) {
                    localStorage.setItem("isActive",
                        JSON.stringify([...oldusers.filter(user => user.id !== correctUesr.activeID),
                        { id: correctUesr.activeID, isActive: true }]))
                } else {
                    localStorage.setItem("isActive",
                        JSON.stringify([...oldusers, { id: correctUesr.activeID, isActive: true }]))
                }
            } else {
                localStorage.setItem("isActive", JSON.stringify([{ id: correctUesr.activeID, isActive: true }]))
            }

            email.current.value = ""
            password.current.value = ""
            navigate(`/`)
        }
    }



    return (
        <>
            <div className="showError" ref={messageEle}>
                <InputFiledError massege={errorMessage} top={"384px"} />
            </div>
            <div
                className="login-form"
                style={{ "paddingTop": "100px", "paddingBottom": "100px" }}
            >
                <div className="container">
                    <div className="form flex-center flex-dir-column">
                        <div className="form-header" ref={header}>
                            <h5 className="mb-15 fw-normal">Login</h5>
                        </div>
                        <form
                            className="maxw-100"
                            onSubmit={loginHeader}
                        >
                            <div className="input-group w-400 maxw-100">
                                <input
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    ref={email}
                                    className="ol-none border-none place-none mb-10 py-15 px-15"
                                    type="email"
                                    placeholder="Email"
                                    value="ibrahem@ali.org"
                                />
                            </div>
                            <div className="input-group w-400 maxw-100">
                                <input
                                    ref={password}
                                    className="ol-none border-none place-none mb-10 py-15 px-15"
                                    type="password"
                                    placeholder="Password"
                                    value="12345678"
                                />
                            </div>
                            <div
                                className="input-group w-400 maxw-100 pos-relative "
                            >
                                <input
                                    className="ol-none border-none place-none mb-10 py-10 c-fff ff-inherit fz-17 border-r-5 cursor-pointer"
                                    type="submit"
                                    value="Sign In"
                                />
                            </div>
                        </form>
                        <div className="create flex-center flex-dir-column mt-15">
                            <Link to={"/reset-password"}>
                                <span className="c-000 mb-15 d-block">
                                    Forgot your password?
                                </span>
                            </Link>
                            <Link to={"/create_account"}>
                                Create account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm