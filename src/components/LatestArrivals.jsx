import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext"; 
import Title from './title';
import ProductItem from "./ProductItem";

const LatestArrivals = () => {
    const { products } = useContext(ShopContext); 
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
     setLatestProducts(products.slice(0,10));
    },[products])

    

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'ARRIVALS'} />
                <p className='w-3/4 m-auto text-xs text-gray-600'>
                Discover the Newest Trends in Style and Performance.
                </p>
            </div>

            <div className='grid lg:grid-cols-5 gap-4'>
                {
                    latestProducts.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
                }
            </div>
            
        </div>
    )
};

export default LatestArrivals;

   
