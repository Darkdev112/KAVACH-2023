import React, { useState, useEffect } from 'react'
import './Navbar.scss'
// import { RiAccountCircleFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/slices/modalSlice'
import logo from '../../../src/Assets/images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = ({ userToken, setUserToken }) => {
  const [navBtn, setNavBtn] = useState(false)
  const dispatch = useDispatch();
  return (
    <div className='navv-all'>
      <div className="nav">
        <div className="left">
          <div className="logo"><img src={logo} alt="" /></div>
          <span className="logo-name"><span className='logo-title'>FRAUD</span> STOP</span>
        </div>
        <div className="middle">
          <div className="home">HOME</div>
          <div className="about-us">ABOUT US</div>
          <div className="contact-us">CONTACT US</div>
        </div>
        <div className="right">
          {!userToken && <div className="login-signUp" onClick={() => { dispatch(openModal()) }}>
            <button className='login-signup-btn'>LOGIN/SIGN UP</button>
          </div>}
          {userToken && <div className="login-signUp" onClick={() => { localStorage.removeItem('token'); setUserToken("") }}>
            <button className='login-signup-btn'>LOGOUT</button>
          </div>}
          {/* <div className="profile"><RiAccountCircleFill className='profile-logo' /></div> */}
        </div>
        <div className="hamb"><GiHamburgerMenu className='burger' onClick={() => setNavBtn(!navBtn)}/></div>
      </div>
      {
        navBtn && (
          <div className="nav2">
            <div className="navTabs">
              <div className="navContent home-small">HOME</div>
              <div className="navContent">ABOUT US</div>
              <div className="navContent">CONTACT US</div>
              
              {!userToken && <div className="navContent log-sign-up" onClick={() => { dispatch(openModal()) }}>LOGIN/SIGN UP</div>}
              {userToken && <div className="navContent log-sign-up" onClick={() => { localStorage.removeItem('token'); setUserToken("") }}>LOGOUT</div>}
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Navbar
