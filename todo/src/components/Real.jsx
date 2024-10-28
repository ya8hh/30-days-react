

const Real = () => {
    const TODO =[];

    const handleClick= (e)=>{
            e.preventDefault();
            const mini = document.querySelector("input").value;
            console.log(mini);
            TODO.push(mini);


    }


  return (
    <div >
        <form className="flex justify-center mt-4 ">
        <input  type="text"  className=" rounded-xl border-solid border-2 border-black p-4 w-1/2"/>
        <button  onClick={handleClick} className="ml-3 border-solid border-2 border-black text-white rounded-xl bg-blue-500 w-16">Add+</button>
        </form>

    </div>
  )
}

export default Real