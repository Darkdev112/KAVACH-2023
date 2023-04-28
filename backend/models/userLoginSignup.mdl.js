const mongoose = require('mongoose')

const UserLoginSignupSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String,
    insuranceFraud: {
      type: Boolean,
      default: true
    },
    creditCardFraud: {
      type: Boolean,
      default: false
    },
    onlineFraud: {
      type: Boolean,
      default: false
    },
    debitCardFraud: {
      type: Boolean,
      default: false
    },
    cryptoFraud: {
      type: Boolean,
      default: false
    },
    coinDetectionFraud: {
      type: Boolean,
      default: false
    },
    hasPurchasedFullModel: {
      type: Boolean,
      default: false
    },
    hasPaid:{
      type:Boolean,
      default:false
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('userLoginSignup', UserLoginSignupSchema)