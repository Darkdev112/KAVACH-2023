const userLoginSignup = require('../models/userLoginSignup.mdl')
const {StatusCodes} = require('http-status-codes');

const getSingleUser=async(req,res)=>{
    const Email=req.user.email;
    const oldUser=await userLoginSignup.findOne({email:Email});
    res.json({
        status:"ok",
        data:oldUser,
    })
}

const updateUser=async(req,res)=>{
    const Email=req.user.email;
    const oldUser= await userLoginSignup.findOne({email : Email});
    const updatedField=req.body;
    const updatedObject1={...oldUser,...updatedField}
    // console.log(oldUser);
    const updatedObject2={...updatedObject1._doc,...updatedField};

    // const updatedObject1={...oldUser,...updatedField}
    const newUser=await userLoginSignup.findOneAndUpdate({email:Email},
        updatedObject2,
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