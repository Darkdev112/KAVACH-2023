import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import { RiAccountCircleFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/slices/modalSlice'
import burger from '../../../src/Assets/images/navbutton.png'

const Navbar = ({ userToken, setUserToken }) => {
  const [navBtn, setNavBtn] = useState(false)
  const dispatch = useDispatch();
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
          {!userToken && <div className="login-signUp" onClick={() => { dispatch(openModal()) }}>Login/SignUp</div>}
          {userToken && <div className="login-signUp" onClick={() => { localStorage.removeItem('token'); setUserToken("") }}>Logout</div>}
          <div className="profile"><RiAccountCircleFill className='profile-logo' /></div>
        </div>
        <img className='burger' src={burger} alt="" onClick={() => setNavBtn(!navBtn)} />
      </div>
      {
        navBtn && (
          <div className="nav2">
            <div className="navTabs">
              <div className="navContent">home</div>
              <div className="navContent">about us</div>
              <div className="navContent">contact us/query</div>
              {!userToken && <div className="navContent" onClick={() => { dispatch(openModal()) }}>Login/SignUp</div>}
              {userToken && <div className="navContent" onClick={() => { localStorage.removeItem('token'); setUserToken("") }}>Logout</div>}
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Navbar
