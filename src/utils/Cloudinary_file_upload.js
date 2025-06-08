import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"   //file system in node   (https://nodejs.org/api/fs.html)


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY , 
    api_secret:process.env.CLOUDINARY_API_SECRET 
  });



const uploadOnCloudinary=async (localFilepath)=>{
    try {
        if(!localFilepath) return null
        //upload the file on cloudinary
       const rsponses= await cloudinary.uploader.upload(localFilepath,
        {
            resource_type: "auto", 
        })
        //file has been uploded successfully
        console.log("file is uploaded on cloudinary",rsponses.url);
        return rsponses;
    } 
    catch (err) 
    {
        fs.unlinkSync(localFilepath)  //remove the locally saved temporary file as the upload operation got falied
        return null;
    }
}


export {uploadOnCloudinary}



