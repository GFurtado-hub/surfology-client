import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Surfboards from "./pages/Surfboards";
import WeatherAPI from "./pages/WeatherAPI";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/surfboards" element={<Surfboards />} />
        <Route
          path="/weatherAPI"
          element={
            <div className="weather-data">
              <WeatherAPI /> {/* Add WeatherAPI component here */}
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;