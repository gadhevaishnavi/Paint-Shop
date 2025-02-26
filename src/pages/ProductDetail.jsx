import React, { useEffect, useState } from "react";
import { useParams,useNavigate  } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import "../assets/css/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://paint-backend-three.vercel.app/product/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-details-container">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Weight:</strong> {product.weight}</p>
      <div className="button-group">
      <button>Buy Now</button>
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      </div>
    </div>
  );
};

export default ProductDetail;

