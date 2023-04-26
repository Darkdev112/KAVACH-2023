import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Subscription = ({ userDetails , setIsFifty}) => {
    
    const nav = useNavigate();
    const handlePayment = async (amount) => {
        try {
            const response = await axios.post('http://localhost:2000/pay', { username : userDetails.username, email : userDetails.email , amount:amount }, {});
            console.log(response);
            nav("/checkEmail");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div style={{ height: "100px", width: "100px", borderRadius: "10px", backgroundColor: "green", color: "white" }} onClick={() => { handlePayment(50); setIsFifty(true) }}>
                50
            </div>
            <div style={{ height: "100px", width: "100px", borderRadius: "10px", backgroundColor: "red", color: "white" }} onClick={() => { handlePayment(1000); setIsFifty(false) }}>
                1000
            </div>
        </div>
    )
}

export default Subscription