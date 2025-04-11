import React, { useContext, useState } from 'react';
import Title from '../components/title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [payMethod, setPayMethod] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    country: '',
    zipcode: '',
    phone: '',
  });

  const { cartItems, placeOrder } = useContext(ShopContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    const productList = Object.entries(cartItems).map(([id, item]) => ({
      product: id,
      quantity: item.quantity,
      priceAtPurchase: item.price, 
    }));
  
    const totalAmount = productList.reduce(
      (sum, p) => sum + p.priceAtPurchase * p.quantity,
      0
    );
  
    const orderData = {
      products: productList,
      shippingAddress: {
        street: formData.street,
        city: formData.city,
        country: formData.country,
        postalCode: formData.zipcode,
      },
      paymentMethod: payMethod,
      totalAmount,
    };
  
    await placeOrder(orderData); 
  };
  

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Delivery Info */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type='text' name='firstName' placeholder='First name' onChange={handleInputChange} />
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type='text' name='lastName' placeholder='Last name' onChange={handleInputChange} />
        </div>

        <input className='border border-black rounded py-1.5 px-3.5 w-full' type='email' name='email' placeholder='Email Address' onChange={handleInputChange} />
        <input className='border border-black rounded py-1.5 px-3.5 w-full' type='text' name='street' placeholder='Street' onChange={handleInputChange} />

        <div className='flex gap-3'>
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type='text' name='city' placeholder='City' onChange={handleInputChange} />
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type='text' name='country' placeholder='Country' onChange={handleInputChange} />
        </div>

        <div className='flex gap-3'>
          <input className='border border-black rounded py-1.5 px-3.5 w-full' type='number' name='zipcode' placeholder='Postal Code' onChange={handleInputChange} />
        </div>

        <input className='border border-black rounded py-1.5 px-3.5 w-full' type='tel' name='phone' placeholder='Phone' onChange={handleInputChange} />
      </div>

      {/* Cart + Payment */}
      <div className='mt-8 min-w-80'>
        <CartTotal />

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          <div className='flex gap-3 flex-col lg:flex-row'>
            <div
              onClick={() => setPayMethod('Cash')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${payMethod === 'Cash' ? 'border-green-500' : 'border-gray-300'}`}
            >
              <div className={`min-w-3.5 h-3.5 border rounded-full ${payMethod === 'Cash' ? 'bg-green-400' : ''}`} />
              <p className='text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button
              onClick={handlePlaceOrder}
              className='bg-black text-white px-16 py-3 text-sm hover:bg-gray-800 transition-colors'
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
