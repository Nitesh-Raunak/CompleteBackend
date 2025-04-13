//approach no-2
import mongoose from "mongoose";
import {DB_Name} from "../constants.js";


const conectDB=async ()=>{
    try {
       const ConnectionInstance= await mongoose.connect(`${process.env.MongoDB_url}/${DB_Name}`);
       console.log(`\n MongoDB connected !! DB Host :${ConnectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connection Failed :",error);
        process.exit(1);  
        
    }
}

export  default conectDB;