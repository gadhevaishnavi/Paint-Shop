import React from 'react';
import '../assets/css/AboutUs.css';
import { PaintBucket, Wrench, Palette, Leaf, Lightbulb, Timer } from "lucide-react";

const AboutUs = () => {
const aboutCards = [
  {
    icon: <PaintBucket size={40} />,
    title: "Premium Paints",
    description: "We offer a wide range of high-quality, durable, and weather-resistant paints for all surfaces."
  },
  {
    icon: <Wrench size={40} />,
    title: "Expert Craftsmanship",
    description: "Our professional painters ensure a flawless finish with precision and expertise."
  },
  {
    icon: <Palette size={40} />,
    title: "Customized Solutions",
    description: "We provide personalized color consultation to match your unique style and preferences."
  },
  {
    icon: <Leaf size={40} />,
    title: "Eco-Friendly Products",
    description: "Our paints are safe, low-VOC, and environmentally friendly for a healthier living space."
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Innovative Techniques",
    description: "We use modern painting techniques, ensuring long-lasting and visually stunning results."
  },
  {
    icon: <Timer size={40} />,
    title: "On-Time Completion",
    description: "We respect deadlines and deliver quality work within the promised timeline."
  }
];

  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          At <strong>Paint Perfection</strong>, we transform spaces with vibrant colors and 
          expert craftsmanship. Our mission is to bring your vision to life with premium 
          quality paints and professional services.
        </p>
      </div>

      <div className="cards-container">
        {aboutCards.map((card, index) => (
          <div key={index} className="about-card">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
