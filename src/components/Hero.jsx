import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 rounded-lg w-3/4 mx-auto">
  <div className="w-full sm:w-1/2 flex flex-col items-start justify-center px-10 py-10 sm:py-0">
  <div className="text-[#414141]">
  <div className="flex items-center gap-2">
    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
    <p className="font-semibold text-lg md:text-xl">THE BEST</p> {/* Increased text size */}
  </div>
  <h1 className="prata-regular text-4xl sm:py-3 lg:text-6xl leading-relaxed font-semibold">SURFBOARDS</h1> {/* Increased heading size */}
  <div className="flex items-center gap-2 mt-3">
    <p className="font-semibold text-lg md:text-xl">SHOP NOW</p> {/* Increased text size */}
    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
  </div>
</div>
  </div>

  <div className="w-full sm:w-1/2">
    <img className="w-full h-auto object-cover rounded-lg" src={assets.HeroImage} alt="main-image" />
  </div>
</div>
  );
};

export default Hero;

