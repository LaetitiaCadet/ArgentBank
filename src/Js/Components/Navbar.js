import { Link } from "react-router-dom";
import '../../Scss/Components/Navbar.scss'
import Logo from '../../Assets/argentBankLogo.png'

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { clearState, setToken, setSubmit} from "../../Store/userSlice"
import { setLogged} from  "../../Store/profilSlice"
import { useEffect } from "react";

const Navbar = () => {
    const {isLogged, firstName} = useSelector((state) => state.userLogged)
    const {token} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const LogOut = (e) => {
        e.preventDefault()
        sessionStorage.removeItem("user")
        sessionStorage.clear()
        dispatch(setLogged(false))
        dispatch(clearState(true))
        dispatch(setSubmit(false))
        dispatch(setToken(''))
        navigate('/', {replace:true})
    }

    useEffect(()=> {
        if (token) dispatch(setLogged(true))
    })
    
    return (
        <div>
            <ul className="nav d-flex justify-content-between align-items-center">
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}><img src={Logo} alt="Logo" className="main-nav-logo-image" /></Link>
                </li>
                {isLogged ? 
                <li className="nav-item d-flex align-items-center">
                    <Link className='nav-link mb-0 me-4' to={'/profil'}><i className="fa-solid fa-user me-2"></i> {firstName}</Link>
                    <Link onClick={LogOut} className="nav-link"><i className="fa-sharp fa-solid fa-arrow-right-from-bracket me-2"></i>Sign Out</Link>
                </li>
                 :
                 <li className="nav-item">
                 <Link className="nav-link" to={'/SignIn'}><span className='user-icon'></span> Sign In</Link>
                 </li>
                }

            </ul>
        </div>
    )
}
 
export default Navbar;