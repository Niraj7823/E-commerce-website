import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { addToCart } from "../store/CartSlice";
import { PRODUCTS_API_ENDPOINT } from "../configs/endpoints";
import InfoToast from "../components/InfoToast";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleGetProductDetails = async () => {
    try {
      setIsLoading(true);
      const products = await axios.get(`${PRODUCTS_API_ENDPOINT}/${id}`);
      setProduct(products.data);
    } catch (error) {
      console.log("Failed to fetch product details", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) return <Loader />;

  if (!product) return <p className="p-6 text-lg">Product not found!</p>;

  return (
    <>
      {showMessage && <InfoToast message="Item added to cart" />}

      <div className="max-w-5xl mx-auto p-6 mt-6 rounded-xl bg-white shadow-xl">
        <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-xl" />

        <div className="flex flex-col md:flex-row gap-10 mt-6">
          <div className="flex-1 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-72 h-72 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-xl font-semibold text-purple-600 mb-2">
              ${product.price}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <button
              onClick={handleAddToCart}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
