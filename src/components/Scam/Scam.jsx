import React from 'react'
import './Scam.scss'
import scam from '../../../src/Assets/images/spam.png'

const Scam = () => {
  return (
    <div>
      <div className="back">
        <div className="scam-box">
            <img src={scam} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Scam
