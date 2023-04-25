const userLoginSignup = require('../models/userLoginSignup.mdl')
const {StatusCodes} = require('http-status-codes');

const getSingleUser=async(req,res)=>{
    const Email=req.user.email;
    const oldUser=await userLoginSignup.findOne({email:Email});
    res.send({
        status:StatusCodes.OK,
        message:oldUser,
    })
}

const updateUser=async(req,res)=>{
    const Email=req.user.email;
    const oldUser= await userLoginSignup.findOne({email : Email});
    const updatedField=req.body;
    // console.log(updatedObj);
    const newUser=await userLoginSignup.findOneAndUpdate({email:Email},
        updatedField,
        {   
          new: true,
          runValidators: true,
        }
      );
    
      res.send({
        status:StatusCodes.CREATED,
        data:newUser
      })

    // res.send("hiii");

}

module.exports={getSingleUser,updateUser};