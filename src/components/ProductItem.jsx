import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/surfboards/${id}`}>
            <div className="bg-white border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-300">
                <img 
                    className="w-full h-64 object-cover rounded-lg" 
                    src={image[0]} 
                    alt={name} 
                />
                <p className="mt-2 font-semibold">{name}</p>
                <p className="text-gray-600">{currency}{price}</p>
            </div>
        </Link>
    );
}

export default ProductItem;
