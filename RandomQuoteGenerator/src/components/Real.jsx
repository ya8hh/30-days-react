
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Real = () => {
    const [quote,setQuote] =useState("");
    const generateQuote = async()=>{
        try {
            const response = await axios.get(`https://dummyjson.com/quotes`);
            const random = response.data.quotes[Math.floor(Math.random()*response.data.quotes.length)];
            console.log(random.quote)
            setQuote(random.quote);
            
        } catch (error) {
            console.log("Error in fetching ",error);
            toast.error("error in api");
        }

    }
    const copyTO=()=>{
        if(quote!=""){
            navigator.clipboard.writeText(quote);
            toast.success("COPIED TO CLIPBOARD");
        }
    }



  return (
    <div className=" overflow-auto text-center h-screen  bg-green-300">
        <h1 className=" pt-5 items-center  text-2xl font-bold font-style: italic">Quote Of The Day</h1>
        
        <input readOnly value={quote} className="p-4 border-solid border-black border-2 mt-8 w-full rounded-lg  h-16" type="text" />
        <button onClick={copyTO} className=" border-solid border-green-900 border-2   rounded-lg bg-green-500 h-14 text-white font-bold  w-12  ml-4">Copy</button>
        <button className="  mt-4  border-solid border-green-900 border-2   rounded-lg bg-green-500 h-14 text-white font-bold  w-24 ml-4"
        onClick={generateQuote}
        >Generate</button>
        <ToastContainer position="top-right" autoClose={2000} />
    </div>
    
  )
}

export default Real