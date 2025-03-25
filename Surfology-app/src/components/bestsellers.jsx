import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext"; 
import Title from './title';


const Bestsellers = () => {
    const { products } = useContext(ShopContext); 
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
     setLatestProducts(products.slice(0,10));
    },[])

    console.log(products);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'ARRIVALS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover the Newest Trends in Style and Performance.
                </p>
            </div>

            
        </div>
    )
};

export default Bestsellers;

   
