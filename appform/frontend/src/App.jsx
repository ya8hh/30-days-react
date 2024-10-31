import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home";

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
