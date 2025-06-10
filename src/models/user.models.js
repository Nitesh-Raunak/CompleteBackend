//user model
import mongoose, { Schema } from "mongoose";
import bcrpt from "bcrypt";//used for hashing the passwords
import jwt from "jsonwebtoken";//used for security/encryptions

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,

    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,//cloudinary url(service where we upload the video and audio)
        required: true,
    },
    coverImage: {
        type: String,//cloudinary url
    },
    watchhistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, 'password is required']
    },
    refreshToken: {
        type: String
    }

}, { timestamps: true });

//use of bcrpt
//mongoose hookes for encryptions
// DB processing is time consuming that's why async funtion we have to use
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrpt.hash(this.password, 10);    //encryption of password
        next();
    }
    return next();
    //  if(!this.isModified("password")) return  next();
    //  this.password=bcrpt.hash(this.password,10);    //encryption of password  
    //  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrpt.compare(password, this.password);
}


//use of jwt
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        { 
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY 
        }
    )

}
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
export const User = mongoose.model("User", userSchema);