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
    const navigate = useNavigate();

    
    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        if (storedToken) {
            setToken(storedToken); 
        }
    }, []);

    
    useEffect(() => {
        if (token) {
            localStorage.setItem('authToken', token); 
        } else {
            localStorage.removeItem('authToken'); 
        }
    }, [token]);

    const addToCart = async (itemId, productData) => {
        let cartData = structuredClone(cartItems);
        
        if (cartData[itemId]) {
            if (cartData[itemId].quantity > 0) {
                cartData[itemId].quantity += 1;
            } else {
                cartData[itemId].quantity = 1;
            }
        } else {
            cartData[itemId] = {
                quantity: 1,
                name: productData.name,
                price: productData.price,
                image: productData.image
            };
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            try {
                if (cartItems[item].quantity > 0) {  
                    totalCount += cartItems[item].quantity;
                }
            } catch (error) {
                console.error("Error in getCartCount:", error);
            }
        }
        return totalCount;
    };

    const updateQuantity = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId].quantity = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemId in cartItems) {
            try {
                let itemInfo = products.find((product) => product._id === itemId);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemId].quantity;
                }
            } catch (error) {
                console.error("Error calculating cart amount:", error);
            }
        }
    
        return totalAmount;
    }

    const getProductsData = async () => {
        try {
            const response = await axios.get(backEndUrl + '/api/surfboards')
            if(response.data.success){
                setProducts(response.data.products)
            } else {
                console.error("Error fetching products")
            }
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProductsData();
    }, []);  

    const value = { 
        products, 
        currency, 
        search, 
        setSearch, 
        showSearch, 
        setShowSearch, 
        cartItems, 
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backEndUrl,
        token,
        setToken,
    };

    useEffect(() => {
        console.log(cartItems);  
    }, [cartItems]);

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

