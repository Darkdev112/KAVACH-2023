import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CheckPage = () => {
    const nav = useNavigate();
    const token = localStorage.getItem('token')
    const nextPage = async (status) => {
        const response = axios.patch("http://localhost:2000/singleUser",{
            creditCardFraud : false,
            onlineFraud : false,
            debitCardFraud : false,
            cryptoFraud : false,
            coinDetectionFraud : false,
        },{
            headers : {
                'Content-Type' : "application/json",
                'Authorization' : `Bearer ${token}`
            }
        })
        if(status === "yes")
        {
            nav('/safe')
        }
        else{
            nav('/scam')
        }
    }
  return (
    <div style={{height : "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div>
            <button style={{margin : "2rem"}} onClick={() => {nextPage("yes")}}>Status Yes</button>
            <button style={{margin : "2rem"}} onClick={() => {nextPage("no")}}>Status No</button>
        </div>
    </div>

  )
}

export default CheckPage