const express=require("express");
const router=express.Router();
const authentication=require("../middleware/auth");
const Insta = require('instamojo-nodejs');

const API_KEY="test_f0b94b910f539747e1bb4fb81c3";
const AUTH_KEY="test_606a0d3b2d44154bf8abf9c8d04";

Insta.setKeys(API_KEY,AUTH_KEY);
Insta.isSandboxMode(true);


const {paymentGateway,successController}=require("../controller/paymentGateway.cntrl");
const {createCompanyAPI,updateCompanyAPI}=require("../controller/companyAPI.cntrl");
const {signup,login}=require("../controller/loginSignup.cntrl");
const {getSingleUser,updateUser}=require("../controller/userInfo.cntrl");

router.post("/signup",[],signup);
router.post("/login",[],login);
router.get("/singleUser",authentication,getSingleUser);
router.patch("/singleUser",authentication,updateUser);
router.route('/instamojo',(req,res)=>{
    res.sendFile(__dirname + ".../src/components/Instamojo/Instamojo.jsx")
})
router.post('/pay',paymentGateway);
router.get('/success',successController);
router.post('/createCompanyAPI',createCompanyAPI);
router.patch('/updateCompanyAPI',updateCompanyAPI);

module.exports=router;

