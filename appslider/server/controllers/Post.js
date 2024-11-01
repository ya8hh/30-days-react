import {Pic} from "../model/model.js"
import cloudinary from "cloudinary";
import getDataUrl from "../middleware/url.js";

export const create = async (req,res)=>{

    try {
        const file = req.file;
        if(!file){
            return res.sataus(400).json({message:"No File Uploaded"});
        }
        const fileUrl = getDataUrl(file);
        const cloud = await cloudinary.v2.uploader.upload(fileUrl.content);
        await Pic.create(
            {image:{
                id:cloud.public_id,
                url:cloud.secure_url,
            }});
            res.json({
                message:"Post Created"
            })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        console.log("Error {While create post error in (post.js)}:",error)
    }
}

export const getAll = async (req,res)=>{
    try {
        const pics = await Pic.find().sort({created:-1});
        res.json(pics);
        
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
        console.log("Error {While getting post error in (post.js)}:",error)
    }
}
