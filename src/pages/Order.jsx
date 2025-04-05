import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/title';
const Order = () => {

const {products,currency} = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(1,4).map((item,index) => (
            <div key={index} className='py-4 border-t border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} alt='' className='w-16 sm:w-20' />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>quantity: 1</p>
                    </div>
                    <div>
                      <p className='mt-2'>Date: <span></span></p>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Order;
