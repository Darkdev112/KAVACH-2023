import React, { useState } from 'react'
import axios from 'axios';
import "./Signup.scss"
import { openLogin, closeLogin } from '../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';
import sign from '../../Assets/images/createacc.png'

const Signup = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:2000/signup',{username, email, password},{})
      console.log(response.data.data.register);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='sign'>
      <div className='sign1'>
      </div>
      <div className='sign2'>
        <div className='sign-image'>
          <img src={sign} />
        </div>
        <div className='text'>'
      <input type="name"  id=""  className='name'  placeholder='Name' required/>
     <input type="email"  className="email" id="" placeholder='Email' required/>
     <input type="password" className="password" id=""  placeholder='Password' required/>
     <div className='log'>
     <button>SIGN UP</button>
     </div>
        <div className='parah'>already have an account? Login</div>
        </div>
      </div>
    </div>
  )
}

export default Signup