import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const CheckPage = () => {
    const nav = useNavigate();
    const token = localStorage.getItem('token')
    const queryParams = new URLSearchParams(window.location.search)
    const term = queryParams.get("fraud")

    const [companyName, setCompanyName] = useState("");

    const fraudCompany = async () => {
        const response = await axios.post("http://localhost:2000/createCompanyAPI", {
            name: companyName
        }, {})
    }

    const nextPage = async (status) => {
        console.log(queryParams);
            const response = axios.patch("http://localhost:2000/singleUser", {
                creditCardFraud: false,
                onlineFraud: false,
                debitCardFraud: false,
                cryptoFraud: false,
                coinDetectionFraud: false,
            }, {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${token}`
                }
            })
        if (status === "yes") {
            fraudCompany();
            nav('/scam')
        }
        else {

            nav('/safe')
        }
    }
    return (
        <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <input type="text" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} />
            </div>
            <div>
                <button style={{ margin: "2rem" }} onClick={() => { nextPage("yes") }}>Status Yes</button>
                <button style={{ margin: "2rem" }} onClick={() => { nextPage("no") }}>Status No</button>
            </div>
        </div>

    )
}

export default CheckPage