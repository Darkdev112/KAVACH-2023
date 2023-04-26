import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

const OnlineFraud = ({userDetails}) => {
  
  const nav = useNavigate();

  const navNow = () => {
    if((!userDetails.onlineFraud) && (!userDetails.hasPurchasedFullModel)){
      nav('/subscription')
    }
  }

  useEffect(()=> {
    if(userDetails.email){
      navNow()
    }
  })

  return (
    <div>OnlineFraud</div>
  )
}

export default OnlineFraud