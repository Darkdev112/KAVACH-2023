const express=require("express");
const router=express.Router();
const authentication=require("../middleware/auth");

const {signup,login}=require("../controller/loginSignup.cntrl");
const {getSingleUser,updateUser}=require("../controller/userInfo.cntrl");

router.post("/signup",[],signup);
router.post("/login",[],login);
router.get("/singleUser",authentication,getSingleUser);
router.patch("/singleUser",authentication,updateUser);

module.exports=router;

