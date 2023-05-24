import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getUsers } from '../../Store/UsersSlice'
import InputFiledError from '../InputFiledError/InputFiledError'
import './CreateAccountForm.css'



const CreateAccountForm = () => {
    const { users } = useSelector((state) => state.users)
    const [errorMessage, setErrorMessage] = useState("");


    const disPatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        disPatch(getUsers())
    }, [disPatch])

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()

    const messageEle = useRef()
    const header = useRef()


    const postNewUser = (e) => {
        e.preventDefault()
        const userData = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,
            activeID: new Date().getTime() + Math.floor(Math.random() * 1000)
        }

        const emailFiltring = users.filter((uesr) => uesr.email === email.current.value)
        const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        if (firstName.current.value === "" || lastName.current.value === "") {
            setErrorMessage("First and Second Name can't be empty")
            header.current.style = "margin-bottom:37px"
            messageEle.current.classList.add("active")
            return false
        } else if (!regEx.test(email.current.value) || email.current.value === "") {
            setErrorMessage("This Mail Not Valid Example [mmm@mmm.com]")
            header.current.style = "margin-bottom:37px"
            messageEle.current.classList.add("active")
            return false
        } else if (emailFiltring.length > 0) {
            setErrorMessage("This email address is already associated with an account. If this account is yours, you can reset your password")
            header.current.style = "margin-bottom:60px"
            messageEle.current.classList.add("active")
            return false
        } else if (password.current.value.length < 8) {
            setErrorMessage("Password Should be at least 8 Character")
            header.current.style = "margin-bottom:37px"
            messageEle.current.classList.add("active")
            return false
        } else {

            disPatch(addUser(userData))
            const oldusers = JSON.parse(localStorage.getItem("isActive"))
            if (oldusers) {
                localStorage.setItem("isActive",
                    JSON.stringify([...oldusers, { id: userData.activeID, isActive: true }]))
            } else {

                localStorage.setItem("isActive",
                    JSON.stringify([{ id: userData.activeID, isActive: true }]))
            }
            firstName.current.value = ""
            lastName.current.value = ""
            email.current.value = ""
            password.current.value = ""
            navigate(`/`)

        }
    }
    const removeMessage = () => {
        messageEle.current.classList.remove("active")
        header.current.style = "margin-bottom:0px"
    }



    return (
        <>
            <div className="showError" ref={messageEle}>
                <InputFiledError massege={errorMessage} top={"384px"} />
            </div>
            <div
                className="create-form"
                style={{ paddingTop: "100px", paddingBottom: "100px" }}
            >
                <div className="container">
                    <div className="form flex-center flex-dir-column txt-center">
                        <div className="form-header transition-04s" ref={header}
                        >
                            <h5 className="mb-15 fw-normal">Create Account</h5>
                        </div>
                        <form onSubmit={postNewUser} className="maxw-100">
                            <div className="input-group w-400 maxw-100">
                                <input
                                    onChange={removeMessage}
                                    className="ol-none border-none place-none mb-10 p-15"
                                    type="text"
                                    placeholder="First Name"
                                    ref={firstName}
                                />
                            </div>
                            <div className="input-group w-400 maxw-100">
                                <input
                                    onChange={removeMessage}
                                    className="ol-none border-none place-none mb-10 p-15"
                                    type="text"
                                    placeholder="Last Name"

                                    ref={lastName}
                                />
                            </div>
                            <div className="input-group w-400 maxw-100">
                                <input
                                    onInput={removeMessage}
                                    className="ol-none border-none place-none mb-10 p-15"
                                    type="email"
                                    placeholder="Email"

                                    ref={email}
                                />
                            </div>
                            <div className="input-group w-400 maxw-100">
                                <input
                                    onInput={removeMessage}
                                    className="ol-none border-none place-none mb-10 p-15"
                                    type="password"
                                    placeholder="Password"

                                    ref={password}
                                />
                            </div>
                            <div
                                className="input-group w-400 maxw-100 cursor-pointer pos-relative"
                            >
                                <input
                                    className="ol-none border-none cursor-pointer p-15 c-fff ff-inherit fz-17 border-r-5 "
                                    type="submit" value="Submit" />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAccountForm