import { useRef, useState } from "react";

const Post = () => {
  const selectedFile = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const selectedPicture = e.target.files[0];
    if (selectedPicture) {
      const preview = URL.createObjectURL(selectedPicture);
      setImagePreview(preview);
    }
  };

  const handleButtonClick = () => {
    selectedFile.current.click(); // Opens the file selector
  };

  return (
    <div className="bg-blue-300 flex justify-center items-center h-screen">
     
      <div className="flex flex-col items-center">
      
        <div className="text-center rounded-lg h-72 w-72 mt-10 bg-slate-50 text-bold flex flex-col justify-center items-center space-y-4">
          <button onClick={handleButtonClick}>
            <h1 className="text-center rounded-full align-middle h-24 w-24 bg-gray-200 text-4xl flex items-center justify-center text-bold">+</h1>
          </button>
          <p className="italic">Select Photos</p>
          <button className="w-24 h-10 rounded-lg bg-blue-500 text-white font-bold">Upload</button>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
            ref={selectedFile}
          />
        </div>

        
        <div className="mt-4 flex flex-col items-center">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected Preview"
              className="w-48 h-48 object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
