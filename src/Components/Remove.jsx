import React, { useEffect, useState, useRef ,useContext } from 'react';
import BtnIcons from './BtnIcons';
import Links from './Links';
import { DarkModeContext } from './Context/UseContext';
export default function Remove(props) {
  const {DarkMode}=useContext(DarkModeContext)
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false); 
  const imageUrl = props.file ? URL.createObjectURL(props.file) : '';
  const hasExecuted = useRef(false);  
  useEffect(() => {
    if (props.file && !hasExecuted.current) {
      handleRemoveBackground();
      hasExecuted.current = true;  
    }
  }, [props.file]);

  const handleRemoveBackground = async () => {
    if (!props.file) {
      alert('Please upload an image first!');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image_file', props.file);

    try {
      const response = await fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
          'X-Api-Key': 'cmDuhRGCcYbsYDgQd1fWVZbP', 
        },
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageObjectURL = URL.createObjectURL(blob);
        setResult(imageObjectURL);
      } else {
        console.error('Error removing background:', response.statusText);
        alert('Error removing background, please try again!');
      }
    } catch (error) {
      console.error('Error removing background:', error);
      alert('An error occurred, please try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (result) {
      const link = document.createElement('a');
      link.href = result;
      link.download = 'removed_background.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('No image available to download!');
    }
  };

  const ToggleImage = () => {
    setShowOriginal(prev => !prev);
  };

  return (
    <>
      <div className={`${DarkMode ==="light"?"bg-white":'bg-[#212529]'} w-full min-h-screen mt-[-3%] flex flex-col md:flex-row`}>
        {/* Left Section */}
        <div className='w-full md:w-1/2 mt-12 flex flex-col items-center  md:items-start xl:ml-40'>
          <div className={`w-full h-[50vh] sm:h-[60vh] md:h-[60vh] max-[789px]:mt-20 border-4 ${DarkMode==="light"?"border-[#ECF0F2]":'border-[#886316]'}  mt-6 md:mt-16`}>
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <span className="text-lg font-semibold">Removing background...</span>
              </div>
            ) : (
              <img src={showOriginal ? imageUrl : result} alt="Result" className='w-full h-full object-cover' />
            )}
          </div>
          <div className="w-[80%] sm:w-[60%] md:w-[50%] mt-4 md:mx-auto">
            <BtnIcons Toogle={ToggleImage} />
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start md:ml-12 mt-10 md:mt-32'>
          <div className="w-[90%] lg:w-[70%] md:w-[70%] mt-2">
            <Links />
          </div>

          {/* Download Button Section */}
          <div className='mt-8 md:mt-10 w-[90%] md:w-[60%] lg:w-[60%]'>
            <button onClick={handleDownload} className='bg-[#427DFF] text-white rounded-full font-semibold text-center py-3 md:py-2 w-full'>
              Download
            </button>
            <button className='bg-[#EDF0F2] rounded-full font-semibold text-center py-3 md:py-2 w-full mt-4'>
              Download HD (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
