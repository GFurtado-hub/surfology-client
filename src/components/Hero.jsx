import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-yellow-50 border border-yellow-200 rounded-lg w-custom mx-auto h-[400px]"> {/* Increased height */}
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center px-8 py-8 sm:py-0"> {/* Slightly increased padding */}
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-semibold text-lg md:text-xl">THE BEST</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">SURFBOARDS</h1> {/* Restored larger font size */}
          <div className="flex items-center gap-2 mt-3">
          <Link to='/surfboards' ><p className="font-semibold text-sm md:text-base">SHOP NOW</p></Link>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 h-full">
        <img className="w-full h-full object-cover rounded-lg" src={assets.HeroImage} alt="main-image" /> {/* Image fills container */}
      </div>
    </div>
  );
};
export default Hero;