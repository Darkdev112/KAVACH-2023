const insuranceFraud=require("../models/insuranceFraud.mdl");
const {StatusCodes} = require('http-status-codes');
// const asyncWrapper=require("../helper/asyncWrapper")

const postFraud=async(req,res)=>{
    const {
        policy_csl,
        policy_deductable,
        policy_annual_premium,
        umbrella_limit,
        capital_gains,
        capital_loss,
        number_of_vehicles_involved,
        property_damage,
        bodily_injuries,
        police_report_available,
        total_claim_amount,
        injury_claim,
        property_claim,
        vehicle_claim,
        years_as_customer,
    }=req.body;

    try {
        const detail=await insuranceFraud.create({
            policy_csl,
            policy_deductable,
            policy_annual_premium,
            umbrella_limit,
            capital_gains,
            capital_loss,
            number_of_vehicles_involved,
            property_damage,
            bodily_injuries,
            police_report_available,
            total_claim_amount,
            injury_claim,
            property_claim,
            vehicle_claim,
            years_as_customer,
        })
    
        res.json({
            status:StatusCodes.CREATED,
            msg:detail,
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports=postFraud;
