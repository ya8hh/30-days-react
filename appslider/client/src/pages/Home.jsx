
import Card from "../components/Card"
const Home = () => {
  return (
    <>
            <h1 className="text-center font-black text-2xl mt-2 ">Feed</h1>

    <div className=" text-black p-4 flex w-full h-screen overflow-auto justify-center ">

        <Card/>

    </div>
    </>
  )
}

export default Home