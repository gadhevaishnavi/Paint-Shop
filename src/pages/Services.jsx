import React from 'react';
import '../assets/css/Services.css';  // Ensure you have styles for the service section

const Services = () => {
  const services = [
    {
      title: "Interior Painting",
      description: "We offer professional interior painting services for your home, office, or any indoor space. Our expert painters ensure smooth finishes and vibrant colors.",
      icon: "fa-solid fa-paint-roller", // Font Awesome icon class (use any relevant icon)
    },
    {
      title: "Exterior Painting",
      description: "Enhance the curb appeal of your property with our exterior painting services. We provide durable, weather-resistant finishes for long-lasting beauty.",
      icon: "fa-solid fa-house", // Font Awesome icon class
    },
    {
      title: "Custom Colors & Finishes",
      description: "Choose from a wide variety of custom colors and finishes to make your space uniquely yours. Whether you need matte, gloss, or satin, we have the perfect solution.",
      icon: "fa-solid fa-palette", // Font Awesome icon class
    },
    {
      title: "Furniture Painting",
      description: "Transform your furniture with our professional furniture painting services. From tables to chairs, we can breathe new life into your old pieces.",
      icon: "fa-solid fa-couch", // Font Awesome icon class
    },
    {
      title: "Commercial Painting",
      description: "We provide large-scale commercial painting services for businesses, offices, and other commercial spaces. Timely and high-quality service to meet your business needs.",
      icon: "fa-solid fa-building", // Font Awesome icon class
    },
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <i className={`service-icon ${service.icon}`}></i>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
