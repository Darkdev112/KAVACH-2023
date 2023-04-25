const userLoginSignup = require('../models/userLoginSignup.mdl')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes');
const httpStatus = require('http-status');

const signup = async (req, res) => {
  const { username, email, password } = req.body
  // console.log(username);
  const encryptedPassword = await bcrypt.hash(password, 10)
  try {
    const register = await userLoginSignup.create({
      username,
      email,
      password: encryptedPassword,
    })
    res.json({
      status: StatusCodes.CREATED,
      data: { register },
    })
  } catch (error) {
    res.json({
      status:httpStatus.NOT_FOUND,
      msg: error,
    })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body
  const oldUser = await userLoginSignup.findOne({ email })
  if (!oldUser) {
    res.json({
      status:StatusCodes.NOT_FOUND,
      msg: 'User Not Found',
    })
  }
 
  if (await bcrypt.compare(password, oldUser.password)) {
    const token = jwt.sign({email : oldUser.email, username : oldUser.username}, process.env.JWT_SECRET)
    if (res.status(201)) {
      return res.json({ status:StatusCodes.OK, data: token })
    } else {
      return res.json({ error: 'error' })
    }
  }
  res.json({ status:StatusCodes.NOT_FOUND, error: 'Invalid Password' })
}



module.exports = { signup, login }