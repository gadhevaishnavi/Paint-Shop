import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn ,FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}
        <div className="footer-section about">
          <h2>Paint Perfection</h2>
          <p>
            Transforming spaces with premium quality paints and expert craftsmanship. 
            We bring colors to life with innovative solutions and top-notch service.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/offers">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: shikhareram4@gmail.com</p>
          <p>Phone: +91 8378844361</p>
          <p>Location: Nanded, Maharashtra</p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a href="https://www.facebook.com/Ram shikhare" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/Ram_shikhare_001" target="_blank" rel="noopener noreferrer"><FaInstagram />
          </a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="tel:+918378844361" aria-label="Phone"><FaPhoneAlt /></a>
            <a href="https://wa.me/+918378844361" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp />
            </a>
          
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Paint Perfection | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
