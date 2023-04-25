import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import InsuranceFraud from '../pages/InsuranceFraud/InsuranceFraud'

const Home = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/insurancefraud' element={<InsuranceFraud/>} />
    </Routes>
  )
}

export default Home