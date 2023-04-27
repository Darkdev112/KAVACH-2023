import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import "./Subscription.scss"

const Subscription = ({ userDetails , setIsFifty}) => {
    
    const nav = useNavigate();
    const handlePayment = async (amount) => {
        try {
            const response = await axios.post('http://localhost:2000/pay', { username : userDetails.username, email : userDetails.email , amount:amount,}, {});
            // console.log(response);
            nav("/checkEmail");
        } catch (error) {
            console.log(error);
        }
    }


    // return (
    //     <div>
    //         <div style={{ height: "100px", width: "100px", borderRadius: "10px", backgroundColor: "green", color: "white" }} onClick={() => { handlePayment(50); setIsFifty(true) }}>
    //             50
    //         </div>
    //         <div style={{ height: "100px", width: "100px", borderRadius: "10px", backgroundColor: "red", color: "white" }} onClick={() => { handlePayment(1000); setIsFifty(false) }}>
    //             1000
    //         </div>
    //     </div>
    // )
    return (
        <div className='subscriptionContainer'>
            <h1>CHOOSE YOUR PLAN</h1>
            <div className='subCardContainer'>
            <div className="subCard" onClick={() => { handlePayment(50); setIsFifty(true) }}>
                <div className='cardHead'>One-Time</div>
                <div className="subCardContent1">
                <div className='priceCard'><span className='subCardRupee'>₹</span>50</div>
                <div className='subCardDetails'>One time fraud detection</div>
                <div className='subCardDetails'>Requires renewal after one use</div>
                </div>
            </div>
            <div className='OR'>
                <div className="OrStrip"></div>
                <span className='OrText'>OR</span>
                <div className="OrStrip"></div>
            </div>
            <div className="subCard" onClick={() => { handlePayment(1000); setIsFifty(false) }}>
                <div className='cardHead'>Premium</div>
                <div className="subCardContent2">
                <div className='priceCard'><span className='subCardRupee'>₹</span>1000</div>
                <div className='subCardDetails'>Life time fraud detection</div>
                <div className='subCardDetails'>Requires no renewal</div>
                </div>
            </div>
            </div>
        </div>
      )
}

export default Subscription