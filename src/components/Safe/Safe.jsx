import React from 'react'
import './Safe.scss'
import safee from '../../../src/Assets/images/safeCard.png'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const Safe = () => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/")
    nav(0)
  }
  return (
    <div>
      <div className="safe-back">
        <div className="safe-box">
            <img src={safee} alt="" />
            <Button onClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export default Safe