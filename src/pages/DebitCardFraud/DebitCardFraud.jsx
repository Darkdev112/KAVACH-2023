import React,{useEffect} from 'react'
import { useNavigate } from 'react-router';

const DebitCardFraud = ({userDetails}) => {
  const nav = useNavigate();

  const navNow = () => {
    if((!userDetails.debitCardFraud) && (!userDetails.hasPurchasedFullModel)){
      nav('/subscription')
    }
  }

  useEffect(()=> {
    if(userDetails.email){
      navNow()
    }
  })

  return (
    <div>DebitCardFraud</div>
  )
}

export default DebitCardFraud