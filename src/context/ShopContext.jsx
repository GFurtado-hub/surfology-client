import React, { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext(); 

const ShopContextProvider = ({ children }) => {
    const value = { products };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;