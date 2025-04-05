import React, { useContext, useState } from 'react';
import Title from '../components/title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
//import { assets } from '../assets/assets' 

const PlaceOrder = () => {

  const [payMethod, setPayMethod] = useState('');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>

        <input className='border border-black rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input className='border border-black rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />

        <div className='flex gap-3'>
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>

        <div className='flex gap-3'>
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
        </div>

        <input className='border border-black rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
      </div>

     
      <div className='mt-8 min-w-80'>
        <CartTotal />

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=> setPayMethod('Cash')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${payMethod === 'Cash' ? 'bg-green-400' : ''}`}></p>
              <p className='text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default PlaceOrder

