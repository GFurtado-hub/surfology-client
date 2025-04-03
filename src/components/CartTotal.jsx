import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './title';

const CartTotal = () => {

const { currency, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>
    <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'} />
    </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Total</p>

            <p>{currency}{getCartAmount()}</p>
        </div>
        
        </div>
      </div>
   
  )
}

export default CartTotal
