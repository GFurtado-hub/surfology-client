import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '€';
  const backEndUrl = import.meta.env.VITE_API_URL;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) setToken(storedToken);
  }, []);

  
  useEffect(() => {
    
    const savedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  
  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  
  const addToCart = async (itemId, productData) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId].quantity += 1;
    } else {
      cartData[itemId] = {
        quantity: 1,
        name: productData.name,
        price: productData.price,
        image: productData.image,
      };
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      if (cartItems[item].quantity > 0) {
        totalCount += cartItems[item].quantity;
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId, quantity) => {
    const cartData = structuredClone(cartItems);
    cartData[itemId].quantity = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[itemId].quantity;
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backEndUrl}/api/surfboards`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        console.error("Error fetching products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const placeOrder = async (orderDetails) => {
    try {
      const response = await axios.post(`${backEndUrl}/api/orders`, orderDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201 || response.data.success) {
        const orderedItems = products
          .filter(p => cartItems[p._id] && cartItems[p._id].quantity > 0)
          .map(p => ({
            ...p,
            quantity: cartItems[p._id].quantity,
            date: new Date().toISOString(),
          }));

        setOrders(prev => [...prev, ...orderedItems]);
        setCartItems({});
        navigate('/order');
      }
    } catch (error) {
      console.error("Error placing order:", error.response?.data || error.message);
    }
  };

  
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <ShopContext.Provider value={{
      products,
      currency,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      setCartItems,
      addToCart,
      getCartCount,
      updateQuantity,
      getCartAmount,
      navigate,
      backEndUrl,
      token,
      setToken,
      placeOrder,
      orders,
    }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;



