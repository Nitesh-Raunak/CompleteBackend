// require('dotenv').config({path:'./env'});
// import mongoose from "mongoose";
// import {DB_Name} from "./constants";
import dotenv from "dotenv";
import conectDB from "./DB/dbConnection.js";


dotenv.config({path:'./env'});
conectDB();


// approach no-1
// import mongoose from "mongoose";
// import {DB_Name} from "./constants";
// import express from  "express";
// const app=express();
// //iife concept for async
// (async()=>{
// try
// {
//    await mongoose.connect(`${process.env.MongoDB_url}/${DB_Name}`);
//    app.on("error",(error)=>{
//     console.log("Error :",error);
//     throw error;
//    })


//    app.listen(process.env.PORT,()=>{
//     console.log(`App is listening on port ${process.env.PORT}`);
    
//    })
// }
// catch(error)
// {
//   console.error("Error :",error);
//   throw error;
// }
// })()
