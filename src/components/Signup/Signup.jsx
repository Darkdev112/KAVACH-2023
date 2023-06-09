import React, { useState } from 'react'
import axios from 'axios';
import "./Signup.scss"
import sign from '../../Assets/images/createacc.png';
import { openLogin, closeLogin } from '../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
import logo from '../../../src/Assets/images/logo.png'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:2000/signup', { username, email, password }, {})
      if (response.data.status === "ok") {
        console.log(response.data.data);
        toast.success('Registration successful', {
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
      else {
        console.log(response.data.data);
        toast.error(response.data.data, {
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
      console.log(error);
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
    <div className='sign'>
      <div className='sign1'>
        <img className='signup-logooo' src={logo} alt="" />
        <div className="fraud-all-h1">
          <h2 className='fraud-h1'>F</h2>
          <h2 className='fraud-h1'>R</h2>
          <h2 className='fraud-h1'>A</h2>
          <h2 className='fraud-h1'>U</h2>
          <h2 className='fraud-h1'>D</h2>
        </div>
        <h2 className='stop-h1'>S</h2>
        <h2 className='stop-h1'>T</h2>
        <h2 className='stop-h1'>O</h2>
        <h2 className='stop-h1'>P</h2>
      </div>
      <div className='sign2'>
        <div className='sign-image'>
          <img className='imgg' src={sign} alt='signup'/>
        </div>
        <div className='text'>'
          <input type="name" name="username" className="name" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required={true} />
          <input type="email" className="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
          <input type="password" className="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
          <br />
          <button type="submit" className="btn" onClick={(e) => { e.preventDefault(); handleSubmit(); dispatch(closeLogin()); }}>SIGN UP</button>
        </div>
        <div className='parah'>already have an account? <span onClick={()=> {dispatch(openLogin())}}>
          <span className='login-hover'>Login</span>
        </span></div>
      </div>
    </div>
  )
}

export default Signup;