import { useState } from "react";

const Real = () => {
    const [TODO,setTODO]=useState([]);

    const handleClick= (e)=>{
            e.preventDefault();
            const mini = document.querySelector("input").value;
            console.log(mini);
            
            
            
            setTODO([...TODO,{text:mini}]);
            console.log(TODO);
            document.querySelector("input").value="";

    }
    const deleteTodo =(indexToDelete)=>{
        setTODO(TODO.filter((_,index) =>index!==indexToDelete));

    }

  return (
    <div >
        <form className="flex justify-center mt-4 ">
        <input  type="text"  className=" rounded-xl border-solid border-2 border-black p-4 w-1/2"/>
        <button  onClick={handleClick} className="ml-3 border-solid border-2 border-black text-white rounded-xl bg-blue-500 w-16">Add+</button>
        </form>
        <div className=" text-center mt-4 ">
            <h1 className="text-2xl font-bold">TODO LIST</h1>
            
               <ol className=" items-center mt-4">
                {TODO.map((todo ,index)=>(
                    <li  className=" p-4 flex justify-between text-white  border-solid border-2 h-12 align-middle border-black mt-2 rounded-xl font-style: italic text-xl w-[90%] mr-[5%] ml-[5%] items-center text-center bg-blue-300"
                     key={index}> {todo.text} <button onClick={()=>deleteTodo(index)} className="  rounded-full w-8 h-8 items-end align-middle bg-red-700">x</button></li>
                ))}
               </ol>
            

        </div>
    </div>
  )
}

export default Real