import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIError.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/Cloudinary_file_upload.js";
import { APIResponse } from "../utils/APIResponse.js";
const registerUser = asyncHandler(async (req, res) => {
  // here we can use return behind the res.status(200) to return somwthing
  //   res.status(200).json({
  //     message:"this is Nitesh gupta."
  // })

  // problems is to register the user--------------
  // step-1. get user details from frontend  (if frontend is not there then use postman for user details)
  // step-2. validations---not empty data
  // step-3. check if user already exists :using either email or username
  // step-4. check for image,check for avatar
  // step-5. upload them to cloudinary
  // step-6. create user object--create entry in DB
  // step-7. remove password and refrshtoken field from response
  // step-8. check for user creations
  // step-9. return response



  // step-1. get user details from frontend  (if frontend is not there then use postman for user details)
  const { fullName, email, username, password } = req.body
  console.log("email :", email);
  // step-2. validations---not empty data

  // if (fullName === "") {
  //   throw new APIError(400, "fullname is required")
  // }

  if ([fullName, email, username, password].some((field) => {
    field?.trim() === ""
  })) {
    throw new APIError(400, "All fields is required")
  }

  // step-3. check if user already exists :using either email or username
  // User.findOne({username})
  const existedUser = User.findOne({ $or: [{ username }, { email }] })
  if (existedUser) {
    throw new APIError(409, "User with email or usrername already exists")
  }


  //step-4. check for image,check for avatar
  const avatarLocalPath=req.files?.avatar[0]?.path;
  const coverImageLocalpath=req.files?.coverImage[0]?.path;
  if(!avatarLocalPath)
  {
    throw new APIError(400,"Avatar file is required")
  }

  if(!coverImageLocalpath)
  {
    throw new APIError(400,"coverImage file is required")
  }



  // step-5. upload them to cloudinary
  // await means wait till the work is not done. or await means "jab tak ye kam na ho jai tab tak aage nahi jana hai"
 const avatar=await uploadOnCloudinary(avatarLocalPath)
 const coverImage=await uploadOnCloudinary(coverImageLocalpath)

if(!avatar)
{
  throw new APIError(400,"Avatar file is required")
}
if(!coverImage)
{
  throw new APIError(400,"coverImage file is required")
}




  // step-6. create user object--create entry in DB
 const user= await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url ||"",
    email,
    password,
    username:username.toLowerCase()
  })


  // step-7. remove password and refrshtoken field from response





  // step-8. check for user creations
  const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
  )
  if(!createdUser)
  {
    throw new APIError(500,"something went wrong while registering the user")
  }
  
  // step-9. return response
   return res.status(201).json(
    new APIResponse(200,createdUser,"User registered successfully")
   )


})


export {
  registerUser,
}