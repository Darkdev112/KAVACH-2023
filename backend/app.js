const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./routes/loginSignup')
app.use(cors())
app.use(express.json())

app.use('/',router);
// require("./routes/fraudRouters.js")(app);

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`app is listening to port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()