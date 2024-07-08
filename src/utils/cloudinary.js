import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY // Click 'View Credentials' below to copy your API secret
});

export const uploadOnCloudinary = async (localFilePath)=>{
  try {
    if(!localFilePath){
      return null;
    }
    const res = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    console.log("File Uploaded Successfully !!!", res.url);
    return res;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed

    console.log("File Upload Failed !!!", error);
  }
}