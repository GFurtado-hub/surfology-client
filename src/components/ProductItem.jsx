import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    const imageSrc = image && Array.isArray(image) && image.length > 0 ? image[0] : 'default-image-path.jpg'; 

    return (
        <Link to={`/surfboards/${id}`}>
            <div className="bg-white border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-300 h-full">
                <img 
                    className="w-full h-64 object-cover rounded-lg mb-3" 
                    src={imageSrc} 
                    alt={name} 
                />
                <p className="font-semibold text-base text-gray-900 truncate w-full">{name}</p>
                <p className="text-gray-600">{currency}{price}</p>
            </div>
        </Link>
    );
}

ProductItem.defaultProps = {
    image: [],
};

export default ProductItem;


