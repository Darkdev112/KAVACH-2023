import React from 'react'
import { useNavigate } from 'react-router'
import {toast} from 'react-toastify'
import axios from 'axios'

const CheckEMail = ({userDetails, isFifty}) => {
  const nav = useNavigate();

  const updateUser = async () => {
    console.log(userDetails);
    let obj;
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
    try {
      const response = await axios.patch('http://localhost:2000/singleUser', obj, {
        headers: {
          'Content-Type' : "application/json",
          'Authorization' : `Bearer ${token}`
        }
      });
      if(response.data.status==="ok")
      {
        console.log(response.data.data);
        nav('/');
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
      const response = await axios.get('http://localhost:2000/success', {}, {});
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
      <div>Bhayyy Check Email...</div>
      <h1>If payment is complete <span onClick={checkPayment}>click here</span></h1>
    </>
  )
}

export default CheckEMail