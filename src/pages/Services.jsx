import React from 'react';
import '../assets/css/Services.css'; // Ensure you have styles for the service section
import { PaintRoller, Home, Palette, Sofa, Building2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Interior Painting",
      description: "We offer professional interior painting services for your home, office, or any indoor space. Our expert painters ensure smooth finishes and vibrant colors.",
      icon: <PaintRoller size={40} />,
    },
    {
      title: "Exterior Painting",
      description: "Enhance the curb appeal of your property with our exterior painting services. We provide durable, weather-resistant finishes for long-lasting beauty.",
      icon: <Home size={40} />,
    },
    {
      title: "Custom Colors & Finishes",
      description: "Choose from a wide variety of custom colors and finishes to make your space uniquely yours. Whether you need matte, gloss, or satin, we have the perfect solution.",
      icon: <Palette size={40} />,
    },
    {
      title: "Furniture Painting",
      description: "Transform your furniture with our professional furniture painting services. From tables to chairs, we can breathe new life into your old pieces.",
      icon: <Sofa size={40} />,
    },
    {
      title: "Commercial Painting",
      description: "We provide large-scale commercial painting services for businesses, offices, and other commercial spaces. Timely and high-quality service to meet your business needs.",
      icon: <Building2 size={40} />,
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div> {/* ✅ FIXED */}
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
