import React from 'react'
import './CheckEMail.scss'
import { useNavigate } from 'react-router'
import {toast} from 'react-toastify'
import axios from 'axios'
import email from '../../../src/Assets/images/image 13.png'
import  bg from '../../Assets/images/Group 50.png'

const CheckEMail = ({userDetails, isFifty}) => {
  const nav = useNavigate();

  const updateUser = async () => {
    console.log("updateUser userdetails : ",userDetails);
    let obj;
    console.log("50 : ",isFifty);
    if(isFifty){
      obj= {
        creditCardFraud : true,
        onlineFraud : true,
        debitCardFraud : true,
        cryptoFraud : true,
        coinDetectionFraud : true,
      }
    }
    else{
      obj= {
        hasPurchasedFullModel : true
      }
    }
    const token = localStorage.getItem('token');
    console.log("updateUser Token : ",token);
    try {
      const response = await axios.patch('http://localhost:2000/singleUser', obj, {
        headers: {
          'Content-Type' : "application/json",
          'Authorization' : `Bearer ${token}`
        }
      });
      console.log("response ",response.data);
      if(response.data.status==="ok")
      {
        console.log(response.data.data);
        nav('/')
        nav(0)
      }
    } catch (error) {
      toast.error("Not updated", {
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

  const checkPayment = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:2000/success',{
        params : {
          "email" : userDetails.email
        }
      });
      if(response.data.status==="ok")
      {
        toast.success('Check successful', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updateUser(); 
      }
      if(response.data.status==="notok")
      {
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
      toast.error("Payment not yet complete", {
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
    <>
    <div className='email-section'>
    <div className="emaill">
      <div className="email-up"><img className='img1' src={bg} alt="" />
      </div>
      <div className="email-img"><img className='img2' src={email} alt="" />
        <h3 className='heading-down'>Check your email</h3>
        <p className='para-down'>We sent an email to you at your email adress.You can proceed your payment by clicking on that <span className='linkbro' onClick={checkPayment}>magic link</span></p>
      </div>
      </div>
    </div>
    </>
  )
}

export default CheckEMail;