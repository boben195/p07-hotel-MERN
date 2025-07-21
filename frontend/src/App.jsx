import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<HotelDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
