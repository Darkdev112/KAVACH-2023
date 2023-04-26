import React, { useState } from 'react'
import "./Login.scss"
import axios from 'axios';
<<<<<<< HEAD
import login  from '../../Assets/images/signup.png';
=======
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import {toast} from 'react-toastify'
>>>>>>> d3de7262bb4c3160be8561f3fe6bae6514e02923

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()
<<<<<<< HEAD
    try {
      const response = await axios.post('http://localhost:2000/login', { email, password }, {})
      console.log(response.data.data);
      localStorage.setItem('token', response.data)
    } catch (error) {
      console.log(error);
=======
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
>>>>>>> d3de7262bb4c3160be8561f3fe6bae6514e02923
    }
  }

  return (
<<<<<<< HEAD
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
=======
    <div className='signup'>
        <form className='signupContainer'>
            <h1>Log In</h1>
            <hr/>
            <input type="email" className="signup_input" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
            <input type="password" className="signup_input" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
            <button type="submit" className="submitBtn" onClick={handleSubmit}>Login</button>
        </form>
>>>>>>> d3de7262bb4c3160be8561f3fe6bae6514e02923
    </div>
  )
}

export default Login