import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { HeaderProfil } from "../Components/HeaderProfil"
import { userInfos } from "../../Store/action"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

export const ProfilUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {token} = useSelector((state) => state.user)
    dispatch(userInfos({token}))
    useEffect(() => {
         if (token === ""){
            navigate('/SignIn')
        }
    },[token, navigate])
    return (
        <div>
            <div className="App-header bgd-dark ">
                <header>
                    <Navbar></Navbar>
                </header>
                <main className="main">
                    <HeaderProfil></HeaderProfil>
                    <h2 className="sr-only">Accounts</h2>
                    <section className="account">
                        <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                    <section className="account">
                        <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                        </div>
                        <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                        </div>
                    </section>
                </main>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default ProfilUser