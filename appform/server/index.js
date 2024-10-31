const mongoose = require("mongoose")
const express = require("express")
const cors =require("cors")
const User = require("./model/model");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/loginn");

app.post("/register",(req,res)=>{
    User.create(req.body)
    .then(user=>res.json(user))
    .catch(err=>{res.json(err)})
})
// app.post("/login", async (req,res)=>{
//     const {email,password}=req.body 
//    const user = await  User.findOne({email:email});
    
//         if(user){
//             if(user.password===password){
//             res.json("Sucess");
//             }else{
//             res.json("wrong password");
//             }
//         }else{
//             res.json("User NOT Found");
//         }
// })
app.post("/login", async (req, res) => {
    const { email, password } = req.body; 

    // Log the incoming request for debugging
    console.log("Login attempt with:", email, password);

    try {
        const user = await User.findOne({ email });
        console.log("Found User:", user); // Log the found user

        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("Wrong password");
            }
        } else {
            res.json("User NOT Found");
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json("Internal Server Error");
    }
});

app.listen(3001,()=>{
    console.log("server running");
})