const asyncHandler=(requestHandler)=>{
 (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
 }
}

export {asyncHandler}



// asyncHandler is wrapper function which we will use everywhere in the website when needed.
//when we will get response then it will follow a standards(APIResponse)---search nodejs APIResponse
// when we will get error then it will follow a standards(APIError)---search nodejs APIError



// example of function declarations
// const  asynHandler=()=>{}
// const  asynHandler=(func)=>()=>{}
// const  asynHandler=(func)=>async()=>{}
    
//higher order functions  eg-async
// const asynHandler=(fn)=>async(req,res,next)=>
// {
//  try {
//     await fn(req,res,next);
    
//  } 
//  catch (error) {
//     res.status(error.code ||500).json({
//         success:false,
//         message:error.message
//     })
//  }
// }