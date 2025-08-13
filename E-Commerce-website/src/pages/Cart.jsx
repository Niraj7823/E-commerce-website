import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-xl p-4 flex items-center justify-between hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Unit Price: ${item.price}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="flex items-center gap-1 text-ms font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full hover:opacity-90 transition"
                      >
                        -
                      </button>
                      <span className="px-4 text-md font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="flex items-center gap-1 text-ms font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full hover:opacity-90 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <p className="text-gray-700 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-500 hover:text-red-700 transition transform hover:scale-105 cursor-pointer"
                    title="Remove item"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 sticky top-24 h-fit">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Order Summary
            </h3>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Items:</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Total Quantity:</span>
              <span>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-xl text-gray-800">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
