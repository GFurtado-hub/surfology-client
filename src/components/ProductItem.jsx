import React, {useContext} from 'react';
import {ShopContext} from '../context/ShopContext';
import {Link} from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);


  return (
    <Link to={`/product/${id}`}>
    <div>
        <img className="w-full h-64 object-cover rounded-lg" src={image[0]} alt=''></img>
        <p>{name}</p>
        <p>{currency}{price}</p>
    </div>
      
    </Link>
  )
}

export default ProductItem;
