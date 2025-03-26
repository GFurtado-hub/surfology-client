import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Surfboards from "./pages/Surfboards";
import Products from "./pages/Products";
import PlaceOrder from './pages/placeOrder';
import Cart from "./pages/Cart";
import WeatherApi from "./pages/WeatherAPI";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Navbar from './components/Navbar';



const App = () => {
  return (
    <div className= 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar />
      
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/surfboards" element={<Surfboards />} />
         <Route path="/Products" element={<Products />} />
         <Route path="/place-order" element={<PlaceOrder />} />
         <Route path="/Cart" element={<Cart />} />
         <Route path="/weather-API" element={<WeatherApi />} />
         <Route path="/login" element={<Login />} />
         <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  )
}

export default App;
