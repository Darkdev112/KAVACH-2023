import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import InsuranceFraud from '../pages/InsuranceFraud/InsuranceFraud'
import CreditCardFraud from '../pages/CreditCardFraud/CreditCardFraud'
import OnlineFraud from '../pages/OnlineFraud/OnlineFraud'
import DebitCardFraud from '../pages/DebitCardFraud/DebitCardFraud'
import CryptoFraud from '../pages/CryptoFraud/CryptoFraud'
import CoinFraud from '../pages/CoinFraud/CoinFraud'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
 
const Home = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/insurancefraud' element={<InsuranceFraud/>} />
        <Route path='/creditcardfraud' element={<CreditCardFraud/>} />
        <Route path='/onlinefraud' element={<OnlineFraud/>} />
        <Route path='/debitcardfraud' element={<DebitCardFraud/>} />
        <Route path='/cryptofraud' element={<CryptoFraud/>} />
        <Route path='/coinfraud' element={<CoinFraud/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Home