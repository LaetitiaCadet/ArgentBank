import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

export const ProfilUser = () => {
    return (
        <div>
            <header className="App-header">
                <Navbar></Navbar>
            </header>
            <main class="main bgd-dark">
                <div class="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button class="edit-button">Edit Name</button>
                </div>
                <h2 class="sr-only">Accounts</h2>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                    <p class="account-amount">$2,082.79</p>
                    <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                    <p class="account-amount">$10,928.42</p>
                    <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p class="account-amount">$184.30</p>
                    <p class="account-amount-description">Current Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default ProfilUser