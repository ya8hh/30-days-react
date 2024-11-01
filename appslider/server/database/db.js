import mongoose from "mongoose";


const connectDb = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/postIt");
        console.log("MONGODB CONNECTED");
    }
    catch(error){
        console.log("Error While Connecting To DataBase:",error)
    }
}
export default connectDb;