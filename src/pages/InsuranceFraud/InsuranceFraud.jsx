import React, { useState, useEffect } from 'react'
import "./InsuranceFraud.css"
import { useNavigate } from 'react-router'
import axios from 'axios';

const InsuranceFraud = () => {
  const [userDetails, setUserDetails] = useState({
    _id : "",
    createdAt : "",
    updatedAt : "",
    username  : "",
    email : "",
    password : "",
    coinDetectionFraud : false,
    creditCardFraud : false,
    cryptoFraud : false,
    debitCardFraud : false,
    insuranceFraud : false,
    onlineFraud : false,
    hasPurchasedFullModel : false,
  });
  const nav = useNavigate();

  
  const getUserDetails = async () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const response = await axios.get('http://localhost:2000/singleUser', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      if (response.data.status === "ok") {
        setUserDetails(response.data.data)
      } else {
        console.log("single user fetch failed");
      }
    }
  }

  const navNow = () => {
    if(!(userDetails.insuranceFraud)){
      nav('/subscription')
    }
  }

  useEffect(() => {
    getUserDetails();
  }, [])

  useEffect(()=> {
    if(userDetails.email){
      navNow()
    }
  })
  

  return (
    <div className='fill-form'>
      <h1>FILL THE DETAILS</h1>
      {console.log(userDetails)}
      <div className='form-container'>
        <div className="form">
          <div className="form-1">
            <div className="input-box">Enter number of months as customer:</div>
            <input type="number" id="months" name="months" />
            <div className="input-box">Enter policy holder's age:</div>
            <input type="text" id="age" name="age" />
            <div className="input-box">Enter policy state:</div>
            <input type="text" id="policy-state" name="policy-state" />
            <div className="input-box">Enter policy csl:</div>
            <input type="text" id="policy-csl" name="policy-csl" />
            <div className="input-box">Enter policy deductable:</div>
            <input type="text" id="policy-deduct" name="policy-deduct" />
            <div className="input-box">Enter policy annual premium:</div>
            <input type="text" id="annual-prem" name="annual-prem" />
            <div className="input-box">Enter umbrella limit:</div>
            <input type="text" id="umb-limit" name="umb-limit" />
            <div className="input-box">Enter insured zip:</div>
            <input type="text" id="insured-zip" name="insured-zip" />
            <div className="input-box">Enter number of witnesses:</div>
            <input type="number" id="witness" name="witness" />

          </div>
          <div className='form-2'>
            <div className="input-box">Is policy report available?</div>
            <select name="policy-report" id="policy-report">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="notSure">?</option>
            </select>
            <div className="input-box">Enter injury claim amount:</div>
            <input type="text" id="injury-claim" name="injury-claim" />
            <div className="input-box">Enter property claim amount:</div>
            <input type="text" id="prop-claim" name="prop-claim" />
            <div className="input-box">Enter vehicle claim amount:</div>
            <input type="text" id="vehicle-claim" name="vehicle-claim" />
            <div className="input-box">Enter total claim amount:</div>
            <input type="text" id="total-claim" name="total-claim" />
            <div className="input-box">Name of the auto maker company:</div>
            <input type="text" id="auto-maker" name="auto-maker" />
            <div className="input-box">Name of auto model:</div>
            <input type="text" id="auto-model" name="auto-model" />
            <div className="input-box">Name of auto manufacturing year:</div>
            <input type="text" id="man-year" name="man-year" />
            <div className="input-box">Was the fraud reported?:</div>
            <select name="fraud-report" id="fraud-report">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className='submitBtnCont'>
          <button className='submitBtn'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default InsuranceFraud