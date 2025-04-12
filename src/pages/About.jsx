import React from 'react';
import Title from '../components/title';
import { assets } from '../assets/assets';
const About = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* About Us Section */}
      <div className="text-4xl font-semibold text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 px-6 md:px-20">
        <img
          className="w-full rounded-lg md:max-w-[400px] shadow-lg"
          src={assets.AboutUs}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed">
          <p className="text-lg">
            Welcome to <span className="font-bold">Surfology</span>! This project is a collaborative effort by a group of passionate IronHack students.
          </p>
          <p className="text-lg">
            We are excited to share our journey and the skills we've acquired during our time at IronHack.
          </p>
          <b className="text-gray-800 text-xl">Our Mission</b>
          <p className="text-lg">
            Our goal was to create a platform where clients can create an account, search, filter, buy surfboards, and check their orders. Thank you for being part of our adventure!
          </p>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="text-3xl font-semibold text-center py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-10 px-6 md:px-20">
        <div className="bg-blue-50 border border-blue-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg shadow-md">
          <b className="text-lg">Quality Assurance:</b>
          <p className="text-gray-600">
            We've chosen and tested each product to ensure it meets our stringent quality standards.
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg shadow-md">
          <b className="text-lg">Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process, shopping has never been easier.
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg shadow-md">
          <b className="text-lg">Amazing Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;