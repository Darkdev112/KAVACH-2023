const mongoose = require('mongoose')

const companyAPI = new mongoose.Schema(
  {
    name:{
      type:String,
    },
    number:{
       type:Number,
       default:1,
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('companyAPI', companyAPI)