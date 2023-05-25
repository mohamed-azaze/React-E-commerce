import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../Store/UsersSlice'
import { FaHeart, FaLock, FaSync, FaUser } from "react-icons/fa"
import './SignUpNavbar.css'







const SignUpNavbar = () => {
    const [uesrName, setUestName] = useState("")
    const { users } = useSelector((state) => state.users);

    const disPatch = useDispatch()

    useEffect(() => {
        disPatch(getUsers())
    }, [disPatch])

    const favproductsStorage = JSON.parse(localStorage.getItem("fav"));

    const isActive = JSON.parse(localStorage.getItem("isActive"))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let correctUser = [];
    let activeUser = isActive.filter(useractive => useractive.isActive === true)

    if (isActive) {

        for (let i = 0; i < users.length; i++) {
            for (let j = 0; j < activeUser.length; j++) {
                if (users[i].activeID === activeUser[j].id && activeUser[j].isActive === true) {
                    correctUser.push(users[i])

                }
            }
        }
    }
    useEffect(() => {
        if (correctUser.length > 0) {
            setUestName(correctUser[0].firstName)
        }
    }, [correctUser])

    const notActive = () => {
        const isActive = JSON.parse(localStorage.getItem("isActive"))
        localStorage.setItem("isActive",
            JSON.stringify([...isActive.filter(active => active.isActive !== true),
            { id: correctUser[0].activeID, isActive: false }]))
        setUestName("")
    }

    return (
        <>
            <div className="container">
                <ul className='signup-links d-flex align-center justify-end gap-25'>
                    {activeUser.length > 0 && activeUser[0].isActive === true ? <>
                        <li className='flex-center gap-5 py-15 fz-15 cursor-pointer '>
                            <FaUser className='mr-5' />
                            <span>{uesrName}</span>
                        </li>
                        <li
                            onClick={() => notActive()}
                            className='flex-center gap-5 py-15 fz-15 cursor-pointer'>
                            <FaLock className='mr-5' />
                            <span>Log out</span>
                        </li>
                    </> : <>
                        <li className='flex-center gap-5 py-15 fz-15 cursor-pointer '>
                            <FaUser className='mr-5' />
                            <NavLink to={"/login"}>
                                <span>Sign In</span>
                            </NavLink>
                        </li>
                        <li className='flex-center gap-5 py-15 fz-15 cursor-pointer'>
                            <FaLock className='mr-5' />
                            <Link to={"React-E-commerce/create_account"}>
                                <span>Create Account</span>
                            </Link>
                        </li>
                    </>}
                    <li className='flex-center gap-5 py-15 fz-15 cursor-pointer'>
                        <FaHeart className='mr-5' />
                        <span>
                            <Link to={"React-E-commerce/Wishlist"}>
                                Wishlist <span>({favproductsStorage !== null ? favproductsStorage.length : 0})</span>
                            </Link>
                        </span>
                    </li>
                    <li className='flex-center gap-5 py-15 fz-15 cursor-pointer'>
                        <FaSync className='mr-5' />
                        <span>Compare (0)</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SignUpNavbar




