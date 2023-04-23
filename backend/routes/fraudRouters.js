const express=require("express");
const router=express.Router();

const postFraud=require("../controller/insurancefraud.cntrl");

router.post("/insFraud",[],postFraud);

module.exports=router;

