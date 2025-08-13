import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../components/ProductCard";
import { PRODUCTS_API_ENDPOINT } from "../configs/endpoints";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(PRODUCTS_API_ENDPOINT);
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found!</p>
      )}
    </div>
  );
};

export default Home;
