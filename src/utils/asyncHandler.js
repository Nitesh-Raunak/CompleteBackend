const asyncHandler=(requestHandler)=>{
    
 (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
 }
}

export {asyncHandler}











// example of function declarations
// const  asynHandler=()=>{}
// const  asynHandler=(func)=>()=>{}
// const  asynHandler=(func)=>async()=>{}
    
//higher order functions
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