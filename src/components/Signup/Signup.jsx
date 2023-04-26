import React, { useState } from 'react'
import axios from 'axios';
import "./Signup.scss"
import { openLogin, closeLogin } from '../../redux/slices/modalSlice';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import sign from '../../Assets/images/createacc.png'
=======
import {toast} from 'react-toastify'
>>>>>>> d3de7262bb4c3160be8561f3fe6bae6514e02923

const Signup = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = async () => {
      try
      {
        const response = await axios.post('http://localhost:2000/signup',{username, email, password},{})
        if(response.data.status=="ok"){
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
        else{
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
    }catch(error){
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
<<<<<<< HEAD
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
=======
    <div className='signup'>
        <form className='signupContainer'>
            <h1>Sign Up</h1>
            <hr/>
            <input type="name" name="username" className="signup_input"  placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} required={true}/>
            <input type="email" className="signup_input" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required={true}/>
            <input type="password" className="signup_input" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required={true}/>
            <button type="submit" className="submitBtn" onClick={(e) => {e.preventDefault(); handleSubmit();  dispatch(closeLogin());}}>Signup</button>
        </form>
>>>>>>> d3de7262bb4c3160be8561f3fe6bae6514e02923
    </div>
  )
}

export default Signup