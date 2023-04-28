const companyAPI = require('../models/companyAPI.mdl')

const createCompanyAPI=async(req,res)=>{
    const {name}=req.body;
    const oldCompany = await companyAPI.find({name})
    if (oldCompany != 0) {
      return res.send({status:"exist",data : "Company Already Exists"})
    }

    try {
        const company = await companyAPI.create({
            name
         })
        return res.send({
             status: "ok",
             data: company ,
         })
    } catch (error) {
        return res.send({
          status: "notok",
          data: error ,
        })
    }
}

const updateCompanyAPI=async(req,res)=>{
    const {name}=req.body;
    const oldCompany = await companyAPI.find({name})



    // console.log("HIII",oldCompany[0].number);

    const updatedObject1 = {
        ...oldCompany[0],
        number:oldCompany[0].number+1,
      }

    // console.log(updatedObject1);

      const updatedObject2 = {
        ...updatedObject1._doc,number:updatedObject1.number
      };

    // console.log(updatedObject2);

    const updatedCompany = await companyAPI.findOneAndUpdate({
        name: oldCompany[0].name
      },updatedObject2, {
        new: true,
        runValidators: true,
      }
      );

      console.log(updatedCompany);

      res.send({
        status:"ok",
        data:updatedCompany,
      })
}

module.exports = {createCompanyAPI,updateCompanyAPI};