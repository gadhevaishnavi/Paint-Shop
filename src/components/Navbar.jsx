import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/products" className="nav-link">Products</Link></li>
        <li><Link to="/offers" className="nav-link">Services</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        <li><Link to="/about" className="nav-link">About Us</Link></li>
        <li><Link to="/location" className="nav-link">Location</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
