import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => {

    const currency = '€';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

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
    };
    

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
        navigate
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
