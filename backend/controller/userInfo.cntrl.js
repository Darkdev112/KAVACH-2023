const userLoginSignup = require('../models/userLoginSignup.mdl')
const {
  StatusCodes
} = require('http-status-codes');

const getSingleUser = async (req, res) => {
  try {
    const Email = req.user.email;
    const oldUser = await userLoginSignup.findOne({
      email: Email
    });
    res.json({
      status: "ok",
      data: oldUser,
    })
  } catch (error) {
    res.json({
      error: error,
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const Email = req.user.email;
    const oldUser = await userLoginSignup.findOne({
      email: Email
    });
    const updatedField = req.body;
    const updatedObject1 = {
      ...oldUser,
      ...updatedField
    }
    const updatedObject2 = {
      ...updatedObject1._doc,
      ...updatedField
    };
    const newUser = await userLoginSignup.findOneAndUpdate({
        email: Email
      },
      updatedObject2, {
        new: true,
        runValidators: true,
      }
    );

    res.json({
      status: "ok",
      data: newUser
    })
  } catch (error) {
    res.json({
      error: error
    })
  }

}

module.exports = {
  getSingleUser,
  updateUser
};