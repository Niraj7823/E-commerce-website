import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const uniqueItemCount = cartItems.length;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        Kartico
      </Link>

      <div className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
        <Link to="/" className="hover:text-pink-400 transition duration-300">
          Home
        </Link>
        <Link
          to="/products"
          className="hover:text-pink-400 transition duration-300"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="hover:text-pink-400 transition duration-300"
        >
          About
        </Link>
      </div>

      <div className="relative">
        <Link
          to="/cart"
          className="text-white text-2xl hover:text-pink-400 transition duration-300"
        >
          <FiShoppingCart />
        </Link>
        {uniqueItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
            {uniqueItemCount}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
