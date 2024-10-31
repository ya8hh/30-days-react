import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate =useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("http://127.0.0.1:3001/login",{email,password})
        .then(result=>{ console.log(result)
            if(result.data==="Success"){
                navigate("/home")
        }}).catch(err=>{console.log(err)})
    }
  return (
    <div className="bg-teal-600 h-screen flex justify-center">
        <div className="bg-slate-600 rounded-lg h-82 m-14 w-80 border-2 border-solid border-black">
          <form className="text-center mt-7 text-white text-xl" >
            <label onChange={(e)=>{setEmail(e.target.value)}} className=" mt-4 block text-center" htmlFor="email">Email</label>
            <input type="email" className="p-2 rounded-lg mt-4 h-8 bg-slate-400" id="email" />
            <label  onChange={(e)=>{setPassword(e.target.value)}} className="block text-center mt-4 "   htmlFor="password" id="password">Password</label>
            <input className="p-2 rounded-lg text-center mt-4 h-8 bg-slate-400 " type="password" />
            <button className="block rounded-lg bg-blue-700 text-center mt-2 p-2 items-center mx-auto" onClick={handleSubmit}>Log In</button>
            </form>
            <p className="mx-auto text-center">Not Registered?<Link className="hover:underline text-white" to="/">Register</Link></p>
        </div>
    </div>
  )
}

export default Login