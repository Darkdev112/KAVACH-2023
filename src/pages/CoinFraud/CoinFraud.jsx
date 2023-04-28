import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'
import '../InsuranceFraud/InsuranceFraud.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from "../../Assets/images/coinFraudImg.jpg"

const CoinFraud = ({userDetails}) => {
  console.log("crypto : ", userDetails);
  const nav = useNavigate();

  const navNow = () => {
    if((!userDetails.coinDetectionFraud) && (!userDetails.hasPurchasedFullModel)){
      nav('/subscription')
    }
  }

  useEffect(()=> {
    if(userDetails.email){
      navNow()
    }
  })
  useEffect(()=>{
    AOS.init({duration:2000})
   },[])
  return (
    <div className='fill-form'>
       <h1 data-aos="fade-left">FILL THE DETAILS</h1>
       <div style={{backgroundImage:`url(${img})`}} className="bgFormImg"></div>
      {console.log(userDetails)}
      <div className='form-container' data-aos='zoom-in'>
       
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

export default CoinFraud