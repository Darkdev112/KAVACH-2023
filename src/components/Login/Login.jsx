import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios';
import login from '../../Assets/images/signup.png'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import { closeLogin } from '../../redux/slices/modalSlice';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import logo from '../../../src/Assets/images/logo.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:2000/login', { email, password }, {})
      if (response.data.status === "ok") {
        localStorage.setItem('token', response.data.data)
        toast.success('Login successful', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(closeModal())
        nav(0)
      }
      else {
        toast.error(response.data.error, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className='login'>
      <div className='login1'>
        <img className='login-logoo' src={logo} alt="" />
        <div className="fraud-all">
          <h2 className='fraud-h'>F</h2>
          <h2 className='fraud-h'>R</h2>
          <h2 className='fraud-h'>A</h2>
          <h2 className='fraud-h'>U</h2>
          <h2 className='fraud-h'>D</h2>
        </div>
        <h2 className='stop-h'>S</h2>
        <h2 className='stop-h'>T</h2>
        <h2 className='stop-h'>O</h2>
        <h2 className='stop-h'>P</h2>
      </div>
      <div className='login2'>
        <div className='login-image'>
          <img className='img' src={login} alt='login' />
        </div>
        <div className='text'>
          <input type="email" className="e-mail" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
          <input type="password" className="passwordd" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />

          <button type="submit" className="btnn" onClick={handleSubmit}>LOGIN</button>
        </div>
        <div className="parahh" >haven't registered yet? <span onClick={() => { dispatch(closeLogin()) }}>
          <span className='sign-cover'>Sign Up</span>
        </span></div>
      </div>
    </div>

  )
}

export default Login;