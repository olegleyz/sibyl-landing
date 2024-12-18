import React from 'react';
// @ts-ignore
import uiImage from '../components/ui.png';

const MockupImage: React.FC = () => {
  return (
    <div className="w-full h-full max-w-4xl mx-auto relative">
      <div className="relative mx-auto" style={{ maxWidth: '400px' }}>
        {/* iPhone Frame */}
        <div className="relative rounded-[3rem] bg-[#1A1A1A] p-2 shadow-2xl">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[25px] w-[120px] bg-black rounded-b-3xl z-10" />
          
          {/* Screen Content */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white">
            <img 
              src={uiImage} 
              alt="Sibyl AI Telegram Interface"
              className="w-full h-auto"
            />
          </div>

          {/* Side Button */}
          <div className="absolute right-[-2px] top-[120px] w-[3px] h-[30px] bg-[#2A2A2A] rounded-r-lg" />
          
          {/* Volume Buttons */}
          <div className="absolute left-[-2px] top-[100px] w-[3px] h-[25px] bg-[#2A2A2A] rounded-l-lg" />
          <div className="absolute left-[-2px] top-[140px] w-[3px] h-[40px] bg-[#2A2A2A] rounded-l-lg" />
        </div>
      </div>
    </div>
  );
};

export default MockupImage;
