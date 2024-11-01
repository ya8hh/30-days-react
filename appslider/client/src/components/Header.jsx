import { Link } from "react-router-dom";

const Header = () => {                
  return (
    <div className="bg-blue-500 flex items-center justify-between p-4 border-solid border-b-2 border-black"> {/* Flex container with space between items */}
      <h1 className="text-white font-bold text-2xl">PostIT</h1> {/* Title aligned to the left */}
      <div className="flex space-x-4"> {/* Links aligned to the right */}
      <Link to="/" className="text-white hover:underline text-xl">Home</Link>
        <Link to="/post" className="text-white hover:underline text-xl">Post</Link>
        <Link to="/about" className="text-white  text-xl hover: text-bold">About</Link>
      </div>
    </div>
  );
}

export default Header;
