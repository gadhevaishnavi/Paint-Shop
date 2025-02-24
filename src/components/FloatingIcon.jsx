import  { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../assets/css/FloatingIcon.css";

const FloatingIcon = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsVisible(false), 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`floating-icons ${isVisible ? "visible" : "hidden"}`}>
      <a
        href="https://wa.me/+918378844361"
        className="floatingicon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={25} />
        <span className="tooltip">+918378844361</span>
      </a>
      <a href="tel:+918378844361" className="floatingicon call">
        <FaPhoneAlt size={25} />
        <span className="tooltip">+918378844361</span>
      </a>
      <a href="shikhareram4@gmail.com" className="floatingicon email">
        <FaEnvelope size={25} />
        <span className="tooltip">shikhareram4@gmail.com</span>
      </a>
    </div>
  );
};

export default FloatingIcon;