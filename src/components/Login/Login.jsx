import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:2000/login',{email,password},{})
      console.log(response.data.data);
      localStorage.setItem('token', response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='signup'>
        <form className='signupContainer'>
            <h1>Log In</h1>
            <hr/>
            <input type="email" className="signup_input" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="signup_input" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="submitBtn" onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login