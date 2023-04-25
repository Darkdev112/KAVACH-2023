import React from 'react'
import './Card.scss'
import Insurance from '../../../src/Assets/images/insurance.png'
import Credit from '../../../src/Assets/images/credit.png'
import Debit from '../../../src/Assets/images/debit.png'
import Coin from '../../../src/Assets/images/coin.png'
import Crypto from '../../../src/Assets/images/crypto.png'
import Online from '../../../src/Assets/images/online.png'

const Card = () => {
  return (
    <div className='card-section'>
      <h1>HEADING OF THE FRAUD TYPE</h1>
      <div className="cards">
        <div className="card1 cardm1"><img src={Insurance} alt="" /></div>
        <div className="card1"><img src={Credit} alt="" /></div>
        <div className="card1"><img src={Online} alt="" /></div>
      </div>
      <div className="cards cardsd">
        <div className="card2 cardm2"><img src={Debit} alt="" /></div>
        <div className="card2"><img src={Crypto} alt="" /></div>
        <div className="card2"><img src={Coin} alt="" /></div>
      </div>
    </div>
  )
}

export default Card
