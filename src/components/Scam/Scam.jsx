import React from 'react'
import './Scam.scss'
import scam from '../../../src/Assets/images/spam.png'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const Scam = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/")
    nav(0)
  }
  return (
    <div>
      <div className="back">
        <div className="scam-box">
            <img src={scam} alt="" />
            <Button onClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export default Scam
