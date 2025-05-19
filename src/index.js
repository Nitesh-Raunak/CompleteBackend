// this is for approach no-1
// require('dotenv').config({path:'./env'});
// import mongoose from "mongoose";
// import {DB_Name} from "./constants";


// this is for approach no-2 (which is in DB folder)
import express from "express";//routing 
import dotenv from "dotenv";//dotenv is used for loading the env file everywhere where it used in entire websites.
import conectDB from "./DB/dbConnection.js";
const app=express();
dotenv.config({path:'./env'});
//if database connetion is failed then we have to show an error so for this purpose promise() are used.
conectDB()
.then(()=>{
 app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`Server is running at port :${process.env.PORT}`);
    app.on("error",(error)=>
    {
         console.log("Error :",error);
         throw error;
    }) 
 })
})
.catch((err)=>{
    console.log(`MongoDb connection failed !!! ${err}`);
});

/* 
approach no-1
import mongoose from "mongoose";
import {DB_Name} from "./constants";
import express from  "express";
const app=express();
//iife concept for async
(async()=>{
try
{
   await mongoose.connect(`${process.env.MongoDB_url}/${DB_Name}`);
   app.on("error",(error)=>{
    console.log("Error :",error);
    throw error;
   })
   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port ${process.env.PORT}`);  
   })
}
catch(error)
{
  console.error("Error :",error);
  throw error;
}
})() 
*/
