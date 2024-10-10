import React, { useContext } from 'react';
import RemoveBg from '../assets/Vedio/removebg.mp4';
import Example1 from '../assets/img/Example1.jpg';
import Example2 from '../assets/img/Example2.jpg';
import Example3 from '../assets/img/Example3.jpg';
import Example4 from '../assets/img/Example4.jpg';
import FreeBg from '../assets/img/free.png'
import Vectors from './Vectors';
import {DarkModeContext} from '../Components/Context/UseContext';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const { DarkMode } = useContext(DarkModeContext);
  const navigate = useNavigate();

  const uploadPage = () => {
    navigate('/Upload');
  };

  return (
    <>
      <div className={`w-full ${DarkMode === 'light' ? "bg-white" : "bg-[#212529]"}    flex flex-col lg:flex-row`}>
        {/* Left Section */}
        <div className="flex items-center justify-center w-full  lg:w-1/2 px-4 mt-[-7%] lg:px-0">
          <div className="flex flex-col items-center lg:items-start lg:ml-48 max-[980px]:mt-10">
            <video className="rounded-3xl w-full lg:w-3/4  h-auto mb-6" loop autoPlay muted>
              <source src={RemoveBg} type="video/mp4" />
            </video>
            <h1 className={`${DarkMode === 'light' ? "text-stone-700" : "text-white"} mt-5 font-bold text-3xl md:text-5xl lg:text-6xl tracking-wider text-center lg:text-left`}>
              Remove Image <br /> Background
            </h1>
            <span className={`${DarkMode === 'light' ? "text-gray-900" : "text-zinc-400"} mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-center lg:text-left`}>
              100% Automatically and <span
  className={`rounded-full px-4 py-1 text-lg bg-cover bg-center`}
  style={{ backgroundImage: `url(${FreeBg})` }}
>
  Free
</span>
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center mt-18  lg:items-start w-full lg:w-1/2 px-4 lg:px-0 relative">
          {/* Vectors */}
          <div className="absolute hidden lg:block lg:w-54 lg:h-64" style={{ left: '70%', top: '18%' }}>
            <Vectors />
          </div>

        
<div className={`${DarkMode === 'light' ? "bg-white" : "bg-[#212529]"} w-full lg:w-2/3 h-60 md:h-80  max-[980px]:mt-10 sm:h-60 justify-center lg:p-8  ${DarkMode === 'light' ? "shadow-[1px_-1px_60px_0px_rgba(220,220,220,1)]" : "shadow-[1px_11px_85px_22px_#886316]"} rounded-3xl flex flex-col items-center lg:mt-40 lg:ml-10`}>

  <button onClick={uploadPage} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 text-lg lg:text-xl rounded-3xl">
    Upload Image
  </button> 
  <p className="mt-4 text-gray-600 font-semibold text-lg lg:text-2xl">or drop a file</p>
  <span className="text-sm mt-2 text-gray-600">
    Paste image or <a href="#" className="text-blue-500 underline">URL</a>
  </span>
</div>



          <div className="flex flex-wrap justify-center max-[478px]:justify-start space-x-4 mt-10 lg:ml-10">
            <p className="text-gray-600 font-semibold text-sm lg:text-base mt-3 max-[478px]:ml-5 ">No Image?<br /> Try one of these:</p>
            <div className="flex space-x-4">
              {[Example1, Example2, Example3, Example4].map((img, index) => (
                <img key={index} src={img} alt={`Example ${index + 1}`} className="rounded-md w-16 h-16 lg:w-16 lg:h-16 object-cover hover:opacity-80 cursor-pointer" />
              ))}
            </div>
          </div>

          <p className="w-[70%] max-[478px]:w-[90%] text-gray-400 text-xs lg:text-sm mt-4 lg:ml-10">
            By uploading an image or URL, you agree to our <span className="underline">Terms of Service</span>. Learn more about how remove.bg handles your data in our <span className="underline">Policy</span>.
          </p>
        </div>
      </div>
    </>
  );
}
