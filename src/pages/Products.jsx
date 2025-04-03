import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        
        {/* Main Image Section */}
        <div className="flex-1">
          <img
            src={image}
            alt={productData.name}
            className="w-full h-96 object-contain" 
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5">{productData.description}</p>
          <div>
            {/* Fix: Pass `productData` correctly */}
            <button 
              onClick={() => addToCart(productData._id, productData)}  
              className='bg-black text-white mt-5 px-8 py-3 text-sm active:bg-gray-700'>
              ADD TO CART
            </button>
          </div>
        </div>
        <p>{currency}{productData.price}</p>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;



