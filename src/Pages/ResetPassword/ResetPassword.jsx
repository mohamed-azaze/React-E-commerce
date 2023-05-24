import React from 'react'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'
import NavBar from '../../Components/NavBar/NavBar'
import Path from '../../Components/Path/Path'
import Footer from '../../Components/Footer/Footer'
import ResetPasswordForm from '../../Components/ResetPasswordForm/ResetPasswordForm'

const ResetPassword = () => {
    return (
        <>
            <ScrollToTop />
            <NavBar />

            <Path Path={[{ name: "Reset Password" }]} />
            <ResetPasswordForm />

            <Footer />
        </>
    )
}

export default ResetPassword