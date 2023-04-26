import React, { useState, useEffect } from 'react'
import './Navbar.scss'
import {RiAccountCircleFill} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/slices/modalSlice'

const Navbar = ({userToken, setUserToken}) => {
  
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
            {!userToken && <div className="login-signUp" onClick={() => {dispatch(openModal())}}>Login/SignUp</div>}
            {userToken && <div className="login-signUp" onClick={() => {localStorage.removeItem('token'); setUserToken("")}}>Logout</div>}
            <div className="profile"><RiAccountCircleFill className='profile-logo'/></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
