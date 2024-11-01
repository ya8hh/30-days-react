

const Card = () => {
    // const back =`https://images.emojiterra.com/google/android-nougat/512px/23e9.png`;
  return (
    <div className="flex justify-evenly max-h-screen  ">
        <button className="text-white font-bold mr-10 mt-48 text-4xl rounded-lg h-12 w-24 align-middle rotate-180" >▶️</button>
        <div className=" rounded-lg  w-80 border-2 h-96 border-black border-solid">
            <img src="https://images.emojiterra.com/google/android-nougat/512px/23e9.png" alt=""
            className="object-cover h-full w-full rounded-lg"
            />
        </div>
        <button className="text-white mt-48 font-bold ml-10 text-4xl rounded-lg h-12 w-24 align-middle" >▶️</button>

    </div>
  )
}

export default Card