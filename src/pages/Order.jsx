import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/title';

const Order = () => {
  const { orders, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          orders.length === 0 ? (
            <p className="text-gray-500 mt-4">You haven’t placed any orders yet.</p>
          ) : (
            orders.map((item, index) => (
              <div key={index} className='py-4 border-t border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                  {item.images && item.images.length > 0 ? (
                    <img src={item.images[0]} alt={item.name} className='w-16 sm:w-20' />
                  ) : (
                    <div className="w-16 sm:w-20 bg-gray-200 text-center flex items-center justify-center">No Image</div>
                  )}
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base'>
                      <p className='text-lg'>{currency}{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div>
                      <p className='mt-2'>Date: <span>{new Date(item.date).toLocaleDateString()}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
}

export default Order;


