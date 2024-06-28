// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import { connectDB } from "./db/index.js";
dotenv.config({
  path:'./env'
})

const PORT = process.env.PORT || 8000;
connectDB()
.then(()=>{
  app.listen(PORT,()=>{
    console.log(`App Listening on Port ${PORT}`);
  })
})
.catch((error)=>{
  console.error(`MongoDB Connection Failed! ${error}`);
  throw error;
})