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
      default: true
    },
    onlineFraud: {
      type: Boolean,
      default: true
    },
    debitCardFraud: {
      type: Boolean,
      default: true
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
    }
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('userLoginSignup', UserLoginSignupSchema)