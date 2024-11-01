import express from "express";
import cloudinary from "cloudinary";
import path from "path";
import connectDb from "./database/db.js";
import dotenv from "dotenv";

dotenv.config();
cloudinary.v2.config({
    cloud_name: process.env.Cloud_Name,
    api_key:process.env.Cloud_Api,
    api_secret: process.env.Cloud_Secret,
})
const app = express();
const port = process.env.PORT;
app.use(express.json());
import pinRoutes from "./routes/routes.js";
app.use("/api/app",pinRoutes);

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
    connectDb();
})