import React from 'react'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'
import NavBar from '../../Components/NavBar/NavBar'
import Path from '../../Components/Path/Path'
import Footer from '../../Components/Footer/Footer'
import LoginForm from '../../Components/LoginForm/LoginForm'

const Login = () => {
    document.title = `Account – Surprise`

    return (
        <>
            <ScrollToTop />
            <NavBar />

            <Path Path={[{ name: "Login Account" }]} />
            <LoginForm />

            <Footer />
        </>
    )
}

export default Login