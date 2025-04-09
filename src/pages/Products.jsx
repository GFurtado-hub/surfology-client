import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      // Check if 'foundProduct.image' exists and has at least one element
      if (Array.isArray(foundProduct.image) && foundProduct.image.length > 0) {
        setImage(foundProduct.image[0]);
      } else {
        setImage('default-image-path.jpg'); // Fallback to default image if no image is available
      }
      setLoading(false); // Set loading to false when data is fetched
    } else {
      setLoading(false); // No product found, stop loading
    }
  }, [productId, products]);

  if (loading) {
    return <div>Loading...</div>; // Display loading text while fetching product data
  }

  if (!productData) {
    return <div>Product not found.</div>; // Display if no product is found for the given productId
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        
        {/* Main Image Section */}
        <div className="flex-1">
          <img
            src={image} // Fallback image is already handled above
            alt={productData.name}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <p className="mt-5">{productData.description}</p>
          <div>
            {/* Pass `productData` correctly */}
            <button 
              onClick={() => addToCart(productData._id, productData)}  
              className="bg-black text-white mt-5 px-8 py-3 text-sm active:bg-gray-700">
              ADD TO CART
            </button>
          </div>
        </div>
        
        {/* Product Price */}
        <p>{currency}{productData.price}</p>
      </div>
    </div>
  );
};

export default Products;





