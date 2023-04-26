import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

const CoinFraud = ({userDetails}) => {
  const nav = useNavigate();

  const navNow = () => {
    if((!userDetails.coinFraud) && (!userDetails.hasPurchasedFullModel)){
      nav('/subscription')
    }
  }

  useEffect(()=> {
    if(userDetails.email){
      navNow()
    }
  })

  return (
    <div>CoinFraud</div>
  )
}

export default CoinFraud