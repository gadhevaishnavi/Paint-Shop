
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Offers from "./pages/Services";
import Contact from "./pages/Contact";  // React will automatically resolve .jsx if omitted
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Location from "./components/Location";


const App = () => {
  return (
    <>
      <Navbar />
      {/* <Loader/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="about" element={<AboutUs/>}/>
        <Route path="location" element={<Location/>}/>
      </Routes>
      <Footer/>
      </>
    
  );
};

export default App;
