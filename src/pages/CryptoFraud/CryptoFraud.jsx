import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

const CryptoFraud = ({userDetails}) => {
  console.log("crypto : ", userDetails);
  const nav = useNavigate();

  const navNow = () => {
    if((!userDetails.cryptoFraud) && (!userDetails.hasPurchasedFullModel)){
      nav('/subscription')
    }
  }

  useEffect(()=> {
    if(userDetails.email){
      navNow()
    }
  })

  return (
    <div>CryptoFraud</div>
  )
}

export default CryptoFraud