import React from 'react'
import "./Button.css"

const Button = ({onClick}) => {
  return (
    <div className="container">
        <button type="button" className="button">
        <span onClick={onClick}>Go Home</span>
      </button>
    </div>  
  )
}

export default Button