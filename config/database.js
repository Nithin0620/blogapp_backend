const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DATABASE_URL;

const connectwithDB = async ()=>{
   mongoose.connect(url,{
      // useNewUrlParser:true,
      // useUnifiedTopology:true,
   })
   .then(()=>{console.log("Database connected successfully")})
   .catch((err)=>{
      console.log("Error connecting to the databasse");
      console.log(err.message);
      console.error(err);
      process.exit(1);
   })
};

module.exports =  connectwithDB;