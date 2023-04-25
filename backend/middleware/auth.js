const jwt=require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes');


const authentication = async (req, res , next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.send({
        status:StatusCodes.UNAUTHORIZED,
        message:'No token provided'
      })
    }
  
    const token = authHeader.split(' ')[1]
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const {email,username}=decoded;
      req.user={email,username};
    //   console.log(`hiii ${req.user.username}`)
      next();
    } catch (error) {
      res.send({
        status:StatusCodes.NOT_FOUND,
        message:'Not authorized to access this route'
      })
    }
    // res.send('Hiiii')
}

module.exports=authentication;