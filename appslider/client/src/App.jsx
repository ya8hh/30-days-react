
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About"
import Footer from "./components/Footer";
import Post from "./pages/Post";
function App() {
  

  return (
    <div className=" flex  flex-col  h-screen ">
    <Header/>
   
   <Routes>
     <Route path="/" element={<Home/>} ></Route>
     <Route path="/post" element={<Post/>} ></Route>
     <Route path="/about" element={<About/>}></Route>
   </Routes>
   <Footer/>
   
   </div>
  )
}

export default App
