

const Real = () => {



    
  return (
    <div className=" overflow-auto text-center h-screen  bg-green-300">
        <h1 className=" pt-5 items-center  text-2xl font-bold font-style: italic">Quote Of The Day</h1>
        
        <input className=" border-solid border-black border-2 mt-8 w-1/2 rounded-lg  h-16" type="text" />
        <button className=" border-solid border-green-900 border-2   rounded-lg bg-green-500 h-14 text-white font-bold  w-12  ml-4">Copy</button>
        <button className="  mt-4  border-solid border-green-900 border-2   rounded-lg bg-green-500 h-14 text-white font-bold  w-24 ml-4" >Generate</button>
    </div>
    
  )
}

export default Real