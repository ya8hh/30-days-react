import mongoose from "mongoose"
const PictureSchema = new mongoose.Schema({
    image:{
        id:String,
        url:String,
        required:true,
    }
},{timestamps:true});

const Pic = mongoose.model("Pic",PictureSchema);
module.exports =Pic;