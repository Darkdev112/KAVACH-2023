import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Instamojo = () => {

  const [name,setName] = useState("");
  const [email, setEmail] = useState("")
  const [amount,setAmount] = useState("")
  const nav=useNavigate();

  const handleSubmit=async()=>{
    try {
      const response = await axios.post('http://localhost:2000/pay',{name, email,amount},{});
      console.log(response);
      nav("/checkEmail");
    } catch (error) {
      console.log(error);
    }
    
  }


  return (
    <div className="container">
      <br />
      <h1>Instamojo Payment</h1>
      <form action="/pay">

        <div className="form-group">
          <input type="text" placeholder="Name" name="name" className="form-control" required onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="form-group">
          <input type="email" placeholder="Email" name="email" className="form-control" required onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-group">
          <input type="number" placeholder="Amount" name="amount" className="form-control" required onChange={(e) => setAmount(e.target.value)}/>
        </div>

        <div className="form-group">
          <button className="btn" onClick={(e) => {e.preventDefault(); handleSubmit(); }}>
               Generate Payment Link
          </button>
        </div>

      </form>
    </div>
  )
}

export default Instamojo