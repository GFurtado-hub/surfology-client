import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link,NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

    const {setShowSearch, getCartCount} = useContext(ShopContext);

    return (

        <div className= 'flex items-center justify-between py-5 font-medium'>

            <Link to='/'><img src={assets.Logo} alt="logo"/></Link>
            <ul className= "hidden sm:flex gap-5 text-sm text-gray-700">
               <NavLink to="/" className= "flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
               <NavLink to="/surfboards" className= "flex flex-col items-center gap-1">
                <p>SURFBOARDS</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
               <NavLink to="/about" className= "flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
               <NavLink to="/weatherAPI" className= "flex flex-col items-center gap-1">
                <p>WEATHERAPI</p>
                <hr className= "w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
               </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
    <img onClick={()=>setShowSearch(true)} src={assets.SearchIcon} className='w-19 cursor-pointer' alt='search-icon'></img>

    <div className='group relative'>
        <img src={assets.ProfileIcon} className='w-10 cursor-pointer' alt='profile-icon'></img>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Log Out</p>
            </div>
        </div>
    </div>    

                <Link to='/cart' className='relative'>
                    <img src={assets.CartIcon} className='w-12 min w-12' alt='cart-icon'></img>
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                
            </div>




        </div>
    )
}

export default Navbar;