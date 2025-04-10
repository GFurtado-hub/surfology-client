import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/title';
import ProductItem from '../components/ProductItem';

const Surfboards = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState(products);
  const [category,setCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if(showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category.toLowerCase()));

    }

    setFilterProducts(productsCopy);
  } 

  useEffect(() => {
    setFilterProducts(products);
  }, [products]); 

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch,products]);

  return (
    <div className="flex flex-col pt-10 border-t px-10">
      
      <div className="text-center mb-10">
        <Title text1="All" text2="SURFBOARDS" />
      </div>

      
      <div className="flex gap-10">
        
        <div className="w-1/4 border-r border-gray-300 pr-5">
          <p className="font-semibold mb-4">FILTERS</p>
          <div className="mb-6">
            <p className="text-sm font-medium mb-2">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value="longboard" onChange={toggleCategory} /> Longboards
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value="shortboard" onChange={toggleCategory} /> Shortboards
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value="fish" onChange={toggleCategory} /> Fish
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value="hybrid" onChange={toggleCategory} /> Hybrid
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value="funboard" onChange={toggleCategory} /> Funboards
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" value="gun" onChange={toggleCategory} /> Gun
              </label>
            </div>
          </div>
        </div>

        
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.images} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surfboards;
