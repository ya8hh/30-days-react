
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate =useNavigate();
    
    


    const handleSubmit =(e)=>{
         e.preventDefault();
        axios.post("http://127.0.0.1:3001/register",{name,email,password})
        .then(result=>console.log(result))
        .catch(err=>{console.log(err)})
        navigate("/login");
    }
  return (
    <div className="bg-teal-600 h-screen flex justify-center">
        <div className="bg-slate-600 rounded-lg h-82 m-14 w-80 border-2 border-solid border-black">
          <form className="text-center mt-7 text-white text-xl" >
            <label className="
            block
            text-center

            
            " htmlFor="name">Name</label>
            <input onChange={(e)=>{setName(e.target.value)}} className="mt-4 rounded-lg h-8 p-2 bg-slate-400" type="text" id="name" />
            <label className="  mt-4 block text-center" htmlFor="email">Email</label>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="p-2 rounded-lg mt-4 h-8 bg-slate-400" id="email" />
            <label className="block text-center mt-4  "   htmlFor="password" id="password">Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} className="p-2 rounded-lg text-center bg-slate-400 mt-4 h-8 " type="password" />
            <button className="block rounded-lg bg-blue-700 text-center mt-2 p-2 items-center mx-auto" onClick={handleSubmit}>Sign Up</button>
            </form>
            <p className="mx-auto text-center">Already Registered?<Link className="hover:underline text-white" to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register