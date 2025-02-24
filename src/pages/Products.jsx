import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import '../assets/css/Product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedProductId, setExpandedProductId] = useState(null); // State to track expanded product

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://paint-backend-three.vercel.app/product/products");
        setProducts(response.data); // Assuming the API returns an array of products
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Render loading state
  if (loading) {
    return <Loader />;
  }

  // Render error state
  if (error) {
    return <div className="error">{error}</div>;
  }

  // Toggle product description visibility
  const toggleDescription = (id) => {
    if (expandedProductId === id) {
      setExpandedProductId(null); // Collapse the description if the same product is clicked
    } else {
      setExpandedProductId(id); // Expand the description
    }
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Weight:</strong> {product.weight}</p>

            {/* Wrap buttons in the container */}
            <div className="button-container">
              <button 
                className="view-detail-btn" 
                onClick={() => toggleDescription(product._id)}>
                {expandedProductId === product._id ? 'Hide Details' : 'View Details'}
              </button>
            </div>

            {/* Conditionally render description */}
            <div 
              className={`description ${expandedProductId === product._id ? 'show' : ''}`}
            >
              {product.desc && <p><strong>Description:</strong> {product.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
