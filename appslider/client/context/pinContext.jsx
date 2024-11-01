import axios from 'axios';
import { createContext,useContext,useState,useEffect ,useNavigate} from 'react';
import toast from 'react-hot-toast';
const PinContext = createContext(null);


export const PinProvider =({children})=>{
    const navigate =useNavigate();
   

    const [post,setPost]=useState([]);
    async function fetchPost() {
        try {
            const {data} = await axios.get("/api/app/all");
            setPost(data);
            
        } catch (error) {
            console.log(error);
            
        }

    }
        
        async function addPost (){
            try {
                const {data} =await axios.post("/api/app/new");
                toast.success(data.message);
                navigate("/");
            } catch (error) {
                console.log(error);
                
            }
        }
        
        useEffect(()=>{
            fetchPost();
        },[])
        return <PinContext.Provider value={{post,fetchPost,addPost}}>
        {children}
        </PinContext.Provider>
}
export const PinData =()=>useContext(PinContext);