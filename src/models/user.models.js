import mongoose ,{Schema} from "mongoose";
import bcrpt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema=new Schema({
    username:{
   type:String,
   required:true,
   unique:true,
   lowercase:true,
   trim:true,
   index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudinary url
        required:true,
    },
    coverImage:{
        type:String,//cloudinary url
    },
    watchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'password is required']
    },
    refreshToken:{
        type:String
    }

},{timestamps:true});


export const User=mongoose.model("User",userSchema);