const mongoose = require('mongoose')

const UserLoginSignupSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String
  },
  {
    strict: true,
    versionKey: false,
    timestamps: true,
  }
)

module.exports = mongoose.model('userLoginSignup', UserLoginSignupSchema)