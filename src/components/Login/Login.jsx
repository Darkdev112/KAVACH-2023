import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios';
import login  from '../../Assets/images/signup.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:2000/login', { email, password }, {})
      console.log(response.data.data);
      localStorage.setItem('token', response.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='login'>
      <div className='login1'>
      </div>
      <div className='login2'>
        <div className='login-image'>
          <img src={login} />
        </div>
        <div className='text'>
     <input type="email"  className="email" id="" placeholder='email' required/>
     <input type="password" className="password" id=""  placeholder='password' required/>
     <div className='log'>
     <button>Login</button>
     </div>
        <div className='parah'>haven't registered yet? Sign UP</div>
        </div>
      </div>
    </div>
  )
}

export default Login