import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { HeaderProfil} from "../Components/HeaderProfil"
import { useDispatch} from "react-redux"
import { setLogged} from  "../../Store/profilSlice"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react"


export const ProfilUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=> {
        const userToken = sessionStorage.getItem('user')
        if (userToken !== null){
            dispatch(setLogged(true))
        } else {
            dispatch(setLogged(false))
            navigate('/SignIn',{replace : true })
        }
    })
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