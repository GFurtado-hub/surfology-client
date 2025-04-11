import React from 'react';
import Title from '../components/title';
import { assets } from '../assets/assets';
const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
    <Title text1={'ABOUT'} text2={'US'} />
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
<img className='w-full rounded-lg md:max-w-[500px]' src={assets.AboutUs} alt="About Us" />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p> Welcome to Surfology! This project is a collaborative effort by a group of passionate IronHack students. </p>
     <p> We are excited to share our journey and the skills we've acquired during our time at IronHack. </p>
      <p></p>
      <b className='text-gray-800'> Our Mission </b>
      <p>Our goal was to create a platform where clients can create an account, search, filter, buy surfboards and check their orders.
      Thank you for being part of our adventure! </p>
</div>
    </div>
    <div className =' text-xl py-4'>
    <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20 gap-10'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>We've chosen and tested each product to ensure it meets our stringent quality standards.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg'>
    <b>Convenience:</b>
    <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg'>
    <b>Amazing Customer Service:</b>
    <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
  </div>
</div>
    </div>
  );
};
export default About;
