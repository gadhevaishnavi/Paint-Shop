import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import '../assets/css/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://paint-backend-three.vercel.app/product/products/${id}`);

        if (!response.data) {
          setError("Product not found");
        } else {
          setProduct(response.data);
        }
      } catch (err) {
        setError("Failed to fetch product. It may not exist.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-detail-container">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Weight:</strong> {product.weight}</p>
      <p><strong>Description:</strong> {product.desc}</p>
    </div>
  );
};

export default ProductDetail;
