import React,{useEffect, useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import InsuranceFraud from '../pages/InsuranceFraud/InsuranceFraud'
import CreditCardFraud from '../pages/CreditCardFraud/CreditCardFraud'
import OnlineFraud from '../pages/OnlineFraud/OnlineFraud'
import DebitCardFraud from '../pages/DebitCardFraud/DebitCardFraud'
import CryptoFraud from '../pages/CryptoFraud/CryptoFraud'
import CoinFraud from '../pages/CoinFraud/CoinFraud'
import Instamojo from '../components/Instamojo/Instamojo'
import CheckEMail from '../components/Instamojo/CheckEMail'
import Subscription  from '../components/Subscription/Subscription' 
import axios from 'axios'

const Home = () => {
  const [userDetails, setUserDetails] = useState({
    _id : "",
    createdAt : "",
    updatedAt : "",
    username  : "",
    email : "",
    password : "",
    coinDetectionFraud : false,
    creditCardFraud : false,
    cryptoFraud : false,
    debitCardFraud : false,
    insuranceFraud : false,
    onlineFraud : false,
    hasPurchasedFullModel : false,
  });
  const nav = useNavigate();

  
  const getUserDetails = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const response = await axios.get('http://localhost:2000/singleUser', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.data.status === "ok") {
        setUserDetails(response.data.data)
      } else {
        console.log("single user fetch failed");
      }
    }
  }

  const navNow = () => {
    if(!(userDetails.insuranceFraud)){
      nav('/subscription')
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [])

  return (
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/insurancefraud' element={<InsuranceFraud userDetails={userDetails}/>} />
        <Route path='/creditcardfraud' element={<CreditCardFraud userDetails={userDetails}/>} />
        <Route path='/onlinefraud' element={<OnlineFraud userDetails={userDetails}/>} />
        <Route path='/debitcardfraud' element={<DebitCardFraud userDetails={userDetails}/>} />
        <Route path='/cryptofraud' element={<CryptoFraud userDetails={userDetails}/>} />
        <Route path='/coinfraud' element={<CoinFraud userDetails={userDetails}/>} />
        <Route path='/instamojo' element={<Instamojo/>} />
        <Route path='/checkEmail' element={<CheckEMail/>} />
        <Route path='/subscription' element={<Subscription/>}/>
    </Routes>
  )
}

export default Home