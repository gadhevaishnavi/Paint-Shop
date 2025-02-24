import React from 'react';
import '../assets/css/Loader.css'; // Make sure to link your custom CSS file for the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading Products...</p>
    </div>
  );
};

export default Loader;
