import React from 'react'
import './Card.scss'
import Insurance from '../../../src/Assets/images/insurance.png'
import Credit from '../../../src/Assets/images/credit.png'
import Debit from '../../../src/Assets/images/debit.png'
import Coin from '../../../src/Assets/images/coin.png'
import Crypto from '../../../src/Assets/images/crypto.png'
import Online from '../../../src/Assets/images/online.png'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className='card-section'>
      <h1>HEADING OF THE FRAUD TYPE</h1>
      <div className="cards">
        <Link to='/insurancefraud'><div className="card1 cardm1"><img src={Insurance} alt="" /></div></Link>
        <Link to='/creditcardfraud'><div className="card1"><img src={Credit} alt="" /></div></Link>
        <Link to='/onlinefraud'><div className="card1"><img src={Online} alt="" /></div></Link>
      </div>
      <div className="cards cardsd">
      <Link to='/debitcardfraud'><div className="card2 cardm2"><img src={Debit} alt="" /></div></Link>
      <Link to='/cryptofraud'><div className="card2"><img src={Crypto} alt="" /></div></Link>
      <Link to='/coinfraud'><div className="card2"><img src={Coin} alt="" /></div></Link>
      </div>
    </div>
  )
}

export default Card
