import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/Home";
import Services from "./components/pages/Services";
import Signup from "./components/pages/Signup";
import Products from "./components/pages/Products";
import Footer from "./components/pages/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
