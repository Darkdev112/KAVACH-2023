import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import {toast} from 'react-toastify'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try
      {
        const response = await axios.post('http://localhost:2000/login',{email, password},{})
        if(response.data.status=="ok"){
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
        } 
        else{
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
    }catch(error){
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
    <div className='signup'>
        <form className='signupContainer'>
            <h1>Log In</h1>
            <hr/>
            <input type="email" className="signup_input" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
            <input type="password" className="signup_input" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
            <button type="submit" className="submitBtn" onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login