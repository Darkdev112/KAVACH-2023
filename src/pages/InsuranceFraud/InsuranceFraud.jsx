import React, { useState, useEffect } from 'react'
import "./InsuranceFraud.scss"
import { useNavigate , useLocation} from 'react-router'
import img1 from '../../Assets/images/insuranceFraudImg.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useFormik} from 'formik'
import { insurancevalidate } from '../../lib/validate'


const InsuranceFraud = ({userDetails}) => {  
  const nav = useNavigate();
  const { pathname } = useLocation();

  const navNow = () => {
    if((!userDetails.insuranceFraud) && (!userDetails.hasPurchasedFullModel)){
      nav('/subscription')
    }
  }

  const onSubmit = async (values) => {
    console.log(values);
  }

  const formik = useFormik({
    initialValues : {
      years : "",
      policycsl : "",
      policydeduct : "",
      annualprem : "",
      umblimit : "",
      policereport : "",
      injuryclaim : "",
      propclaim : "",
      vehicleclaim : "",
      totalclaim : "",
      capitalgain : "",
      capitalloss : "",
      noofvehicles : "",
      propertydamaged : "",
      bodilyinjuries : "",
    },
    validate : insurancevalidate,
    onSubmit
  })


  useEffect(()=> {
    if(userDetails.email){
      navNow()
    }
  })
  useEffect(()=>{
    AOS.init({duration:2000})
   },[])
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  return (
    <div className='fill-form'>
       <h1 data-aos="fade-left">FILL THE DETAILS</h1>
       <div style={{backgroundImage:`url(${img1})`}} className="bgFormImg"></div>
      
      <form className='form-container' data-aos='zoom-in' onSubmit={formik.handleSubmit}>
       
        <div className="form">
          <div className="form-1">
            <div className="input-box">Enter number of years as customer:</div>
            <input type="number" id="years" name="years" {...formik.getFieldProps("years")}/>

            <div className="input-box">Enter policy csl:</div>
            <input type="number" id="policycsl" name="policycsl" {...formik.getFieldProps("policycsl")} />

            <div className="input-box">Enter policy deductable:</div>
            <input type="number" id="policydeduct" name="policydeduct" {...formik.getFieldProps("policydeduct")}/>

            <div className="input-box">Enter policy annual premium:</div>
            <input type="number" id="annualprem" name="annualprem" {...formik.getFieldProps("annualprem")} />

            <div className="input-box">Enter umbrella limit:</div>
            <input type="number" id="umblimit" name="umblimit" {...formik.getFieldProps("umblimit")} />

            <div className="input-box">Is police report available?</div>
            <input  name="policereport" id="policereport" {...formik.getFieldProps("policereport")}>
            </input>

            <div className="input-box">Enter injury claim amount:</div>
            <input type="number" id="injuryclaim" name="injuryclaim" />

            <div className="input-box">Enter property claim amount:</div>
            <input type="number" id="propclaim" name="propclaim" {...formik.getFieldProps("propclaim")}/>

          </div>
          <div className='form-2'>

          <div className="input-box">Enter vehicle claim:</div>
            <input type="number" id="vehicleclaim" name="vehicleclaim" {...formik.getFieldProps("vehicleclaim")} />

            <div className="input-box">Enter total claim amount:</div>
            <input type="number" id="totalclaim" name="totalclaim" {...formik.getFieldProps("totalclaim")}/>

            <div className="input-box">Enter capital gain:</div>
            <input type="number" id="capitalgain" name="capitalgain" {...formik.getFieldProps("capitalgain")}/>

            <div  className="input-box">Enter capital loss:</div>
            <input type="number" id="capitalloss" name="capitalloss" {...formik.getFieldProps("capitalloss")}/>

            <div className="input-box">Enter number of vehicles:</div>
            <input type="number" id="noofvehicles" name="vehicles" {...formik.getFieldProps("vehicles")}/>

            <div className="input-box">Was any property damaged?</div>
            <input type='number' name="propertydamaged" id="propertydamaged" {...formik.getFieldProps("propertydamaged")}/>


            <div className="input-box">Enter no of bodily injuries:</div>
            <input type="number" id="bodilyinjuries" name="bodilyinjuries" {...formik.getFieldProps("bodilyinjuries")}/>

          </div>
        </div>
        <div className='submitBtnCont'>
          <button type='submit' className='submitBtn'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default InsuranceFraud