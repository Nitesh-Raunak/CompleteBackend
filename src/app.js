import express from "express";//routing 
import cors from "cors";//server setup
import cookieParser from "cookie-parser";//server setup


const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

// when data comes from form
app.use(express.json({limit:"16Kb"}));

//when data comes from url
app.use(express.urlencoded({extended:true,limit:"16Kb"}));

// when we want to stores data like pdf file, image in public folder that can anyone.
app.use(express.static("public"));


//cookies-parser (for storing the cookies of users)
app.use(cookieParser());
export {app}