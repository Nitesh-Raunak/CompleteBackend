//app.js is mainly for express (routing )
import express from "express";//routing 
import cors from "cors";//server setup
import cookieParser from "cookie-parser";//server setup
const app=express();

//app.use()   is used for all middleware file or configurations files.
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,

}));

// when data comes from form
app.use(express.json({limit:"16Kb"}));

//when data comes from url
app.use(express.urlencoded({extended:true,limit:"16Kb"}));

// when we want to stores data like pdf file, image in public folder that can access anyone.
app.use(express.static("public"));


//cookies-parser (for storing the cookies of users)
app.use(cookieParser());

// if we have to keep this portion of code in index.js or in file main then we have to keep this in that folder.
//routes import
import router from "./routes/user.routes.js";

//route declarations
// app.use("/users",userRouter)
app.use('/api/v1/users',router)

//url eg- http://localhost:8000/users/register
// http://localhost:8000/users/login
// http://localhost:8000/api/v1/users/register






export {app}