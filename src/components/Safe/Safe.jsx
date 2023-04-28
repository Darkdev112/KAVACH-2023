import React from 'react'
import './Safe.scss'
import safee from '../../../src/Assets/images/safeCard.png'

const Safe = () => {
  return (
    <div>
      <div className="safe-back">
        <div className="safe-box">
            <img src={safee} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Safe