import React, { useContext, useRef, useState } from 'react';
import Example1 from '../assets/img/Example1.jpg';
import Example2 from '../assets/img/Example2.jpg';
import Example3 from '../assets/img/Example3.jpg';
import Example4 from '../assets/img/Example4.jpg';
import { useNavigate } from 'react-router-dom';
import Remove from './Remove';
import { DarkModeContext } from './Context/UseContext';

export default function Upload(props) {
  const { DarkMode } = useContext(DarkModeContext);
  const [showRemove, setShowRemove] = useState(false); 
  const [selectedFile, setSelectedFile] = useState(null); 

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const Uploadimg = (e) => {
    fileInputRef.current.click();
  };

  const fileChange = (e) => {
    const file = e.target.files[0]; 

    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file); 
      setShowRemove(true); 
    } else {

      alert('Please upload a valid image file.'); 
      setShowRemove(false); 
    }
  };

  return (
    <>
      {showRemove ? (
        <Remove file={selectedFile} />
      ) : (
        <>
          <div className={`relative ${DarkMode === "light" ? "bg-white" : "bg-[#212529]"} flex-col min-h-screen w-full flex  justify-betwee lg:justify-center`}>
  {/* Icon */}
  <div className="absolute lg:left-[65%] lg:top-[4%] flex justify-center inset-x-0  max-[988px]:top-[0%]">
    <svg width="36" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-400">
      <path d="M23.375 0.944336C22.4467 0.944336 21.5565 1.29126 20.9001 1.9088C20.2437 2.52633 19.875 3.3639 19.875 4.23723V15.6514C19.875 16.5248 20.2437 17.3623 20.9001 17.9798C21.5565 18.5973 22.4467 18.9443 23.375 18.9443C24.3033 18.9443 25.1935 18.5973 25.8498 17.9798C26.5062 17.3623 26.875 16.5248 26.875 15.6514V4.23723C26.874 3.36418 26.5049 2.52715 25.8488 1.90981C25.1926 1.29247 24.303 0.945253 23.375 0.944336Z" fill="currentColor"></path>
      <path d="M23.375 27.9443C22.4467 27.9443 21.5565 28.2913 20.9001 28.909C20.2437 29.5266 19.875 30.3644 19.875 31.2379V42.6508C19.875 43.5243 20.2437 44.362 20.9001 44.9797C21.5565 45.5973 22.4467 45.9443 23.375 45.9443C24.3033 45.9443 25.1935 45.5973 25.8498 44.9797C26.5062 44.362 26.875 43.5243 26.875 42.6508V31.2379C26.874 30.3647 26.5049 29.5275 25.8488 28.91C25.1926 28.2925 24.303 27.9453 23.375 27.9443Z" fill="currentColor"></path>
      <path d="M15.5815 19.9443H4.16853C3.29503 19.9443 2.45731 20.3131 1.83965 20.9695C1.22199 21.6258 0.875 22.5161 0.875 23.4443C0.875 24.3726 1.22199 25.2628 1.83965 25.9192C2.45731 26.5756 3.29503 26.9443 4.16853 26.9443H15.5815C16.455 26.9443 17.2927 26.5756 17.9104 25.9192C18.528 25.2628 18.875 24.3726 18.875 23.4443C18.875 22.5161 18.528 21.6258 17.9104 20.9695C17.2927 20.3131 16.455 19.9443 15.5815 19.9443Z" fill="currentColor"></path>
      <path d="M42.5884 19.9443H31.1685C30.295 19.9443 29.4573 20.3131 28.8396 20.9695C28.222 21.6258 27.875 22.5161 27.875 23.4443C27.875 24.3726 28.222 25.2628 28.8396 25.9192C29.4573 26.5756 30.295 26.9443 31.1685 26.9443H42.5815C43.455 26.9443 44.2927 26.5756 44.9104 25.9192C45.528 25.2628 45.875 24.3726 45.875 23.4443C45.875 22.5161 45.528 21.6258 44.9104 20.9695C44.2927 20.3131 43.455 19.9443 42.5815 19.9443H42.5884Z" fill="currentColor"></path>
    </svg>
  </div>

  {/* Heading */}
  <h1 className="text-gray-700 dark:text-gray-200 w-full font-bold text-xl sm:text-2xl lg:text-3xl tracking-wide text-center mt-10 ">
  Upload an image to <br /> Remove the Background
</h1>


  {/* Upload Button */}
  <div className="flex flex-col items-center p-6 sm:p-10 rounded-2xl">
    <button
      style={{ backgroundColor: '#427DFF' }}
      onClick={Uploadimg}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 sm:px-8 text-lg sm:text-xl lg:text-2xl rounded-full"
    >
      Upload Image
    </button>
    <input
      type="file"
      ref={fileInputRef}
      style={{ display: 'none' }}
      onChange={fileChange}
    />
    <p className="mt-4 text-gray-600 dark:text-gray-400 font-semibold text-sm sm:text-md lg:text-lg">
      or drop a file
    </p>
    <span className="text-xs sm:text-sm mt-3 sm:mt-5 text-gray-600 dark:text-gray-400">
      paste image or{' '}
      <a href="#" className="text-gray-600 dark:text-gray-400 underline">
        URL
      </a>
    </span>
  </div>

  {/* Example Images */}
  <div className="space-y-4 lg:space-y-2 lg:space-x-4 ">
    <p className="font-bold text-center py-2 sm:py-4" style={{ color: '#7A7A7A' }}>
      No image? Try one of these:
    </p>

    {/* Center the images */}
    <div className="flex space-x-2 justify-center">
      {[Example1, Example2, Example3, Example4].map((imgSrc, idx) => (
        <img
          key={idx}
          src={imgSrc}
          className="rounded-md w-12 h-10 sm:w-16 sm:h-14 object-cover cursor-pointer hover:opacity-75 transition-opacity"
          alt={`Example ${idx + 1}`}
        />
      ))}
    </div>

  {/* Footer */}
  <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-semibold text-center mt-4" style={{ fontSize: '11px' }}>
    By uploading an image or URL you agree to our{' '}
    <span className="underline">Terms of Service</span>. To learn more about how<br />
    remove.bg handles your personal data, check our{' '}
    <span className="underline">Policy</span>.
  </p>
</div>
  </div>  

        </>
      )}
    </>
  );
}
