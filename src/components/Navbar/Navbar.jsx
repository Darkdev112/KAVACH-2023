import React from 'react'
import './Navbar.scss'
import {RiAccountCircleFill} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="left">
            <div className="logo"></div>
            <div className="logo-name">LOGO NAME</div>
        </div>
        <div className="middle">
            <div className="home">home</div>
            <div className="about-us">about us</div>
            <div className="contact-us">contact us/query</div>
        </div>
        <div className="right">
            <div className="login-signUp"><a href="">Login</a>/<a href="">SignUp</a></div>
            <div className="profile"><RiAccountCircleFill className='profile-logo'/></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
