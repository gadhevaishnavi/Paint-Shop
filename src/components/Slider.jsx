import React, { useState, useEffect } from "react";
import slider1 from "../assets/images/image1.jpeg";
import slider2 from "../assets/images/image2.jpeg";
import slider3 from "../assets/images/image3.jpeg";
import "../assets/css/slider.css"; // Custom CSS for styling

const Slider = () => {
  const sliderData = [
    { id: 1, image: slider1, title: "Welcome To Paint shop", description: "" },
    { id: 2, image: slider2, title: "High-Quality  Exports", description: "We specialize in processing and exporting quality seafood worldwide." },
    { id: 3, image: slider3, title: "Building Long-Term Relationships", description: "Serving in Nanded" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider-container">
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-text">
            <h3>{slide.title}</h3>
            {slide.description && <p>{slide.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
