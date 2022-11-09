import React from 'react';
import { Link } from "react-router-dom";
import '../../Scss/Components/Navbar.scss'
import Logo from '../../Assets/argentBankLogo.png'


const Navbar = () => {

    // let isConnected = true

    // // if (isConnected) {
    // //     <li className="nav-item"><a className="nav-link" href="#">Username</a></li>
    // //     <li className="nav-item"><button className="nav-link" href="#">Username</a></li>
    // // }

    return (
        <div>
            <ul className="nav d-flex justify-content-between align-items-center">
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}><img src={Logo} alt="Logo" className="main-nav-logo-image" /></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/SignIn'}><span className='user-icon'></span> Sign In</Link>
                </li>
            </ul>
        </div>
    )
}
 
export default Navbar;