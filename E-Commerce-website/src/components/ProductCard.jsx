import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaCartPlus } from "react-icons/fa";

import InfoToast from "./InfoToast";
import { addToCart } from "../store/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <>
      {showMessage && <InfoToast message="Item added to cart" />}

      <div className="relative group bg-white rounded-xl shadow-lg p-4 overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl duration-300 flex flex-col justify-between h-full">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>

        <div>
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <h3 className="text-gray-800 font-semibold text-base mt-4 line-clamp-2">
            {product.title}
          </h3>

          <p className="text-sm text-gray-600 mt-1 mb-2">${product.price}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/product/${product.id}`}
            className="text-ms font-medium border border-purple-500 text-purple-500 px-4 py-1 rounded-full hover:bg-purple-50 transition"
          >
            View
          </Link>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-1 text-ms font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full hover:opacity-90 transition"
          >
            <FaCartPlus /> Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
