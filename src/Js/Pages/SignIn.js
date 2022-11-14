import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { addEmail, addPassword, setSubmit } from "../../Store/userSlice"
import { userLogin } from "../../Store/action"
import { useEffect } from "react";

export const SignIn = () => {
    const {isFetching, token} = useSelector((state) => state.user)
    const {isLogged} = useSelector((state) => state.userLogged)
    const {email,password} = useSelector((state => state.user))
    const currentState  = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEmailInputChange = (e) => {
        e.persist();
        dispatch(addEmail(e.target.value))
    }

    const handlePasswordInputChange = (e) => {
        e.persist();
        dispatch(addPassword(e.target.value))
    }

    const onSubmit = ({email, password}) => {
        dispatch(userLogin({email, password}))
    }   

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentState.email && currentState.password){
            onSubmit({ email, password})
            dispatch(setSubmit(true))
        } else if (currentState.email === "" && currentState.password === ""){
            console.log("l'adresse Email ou le mot de passe n'est pas valid ou est manquant")
        }   
    }
    console.log(currentState)

    useEffect(() =>{
        if (token) return navigate("/profil")
    })

    return (
        <div>
            <header className="App-header">
                <Navbar></Navbar>
            </header>
            <main className="main bgd-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form  onSubmit={handleSubmit} method="POST">               
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input 
                             type="email"
                             id="email"
                             placeholder="email"
                             onChange={handleEmailInputChange}
                              />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input 
                            type="password"
                            id="password"
                            placeholder="password"
                            autoComplete="current-password"
                            onChange={handlePasswordInputChange}
                            />
                        </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    <button type="submit" className="sign-in-button">
                    Sign In
                    {isFetching ? <p>Loading ... </p> : null}
                    </button>  
                    </form>
                </section> 
                </main>
            <Footer></Footer>
        </div>
    )
}

export default SignIn