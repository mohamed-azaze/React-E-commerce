import React from 'react'
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop'
import NavBar from '../../Components/NavBar/NavBar'
import Path from '../../Components/Path/Path'
import Footer from '../../Components/Footer/Footer'
import CreateAccountForm from '../../Components/CreateAccountForm/CreateAccountForm'

const CreateAccount = ({ isloggedIn, userAuthentication }) => {
    document.title = `Create Account – Surprise`
    return (
        <>
            <ScrollToTop />
            <NavBar />

            <Path Path={[{ name: "Create Account" }]} />
            <CreateAccountForm isloggedIn={isloggedIn} userAuthentication={userAuthentication} />

            <Footer />
        </>
    )
}

export default CreateAccount