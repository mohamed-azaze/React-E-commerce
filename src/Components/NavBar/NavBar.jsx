import SignUpNavbar from "./SignUpNavbar/SignUpNavbar"
import PagesNavbar from "./pagesNavbar/PagesNavbar"
import '../../effect.css'

const NavBar = () => {

    return (
        <>
            <SignUpNavbar />
            <div className="line-row-full " style={{ "backgroundColor": "#dedcdc" }}></div>
            <PagesNavbar />
        </>
    )
}

export default NavBar