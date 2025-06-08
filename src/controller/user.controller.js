import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser=asyncHandler(async (req,res)=>{
    // here we can use return behind the res.status(200) to return somwthing
      res.status(200).json({
        message:"this is Nitesh gupta ."
    })
})


export {
  registerUser,
}