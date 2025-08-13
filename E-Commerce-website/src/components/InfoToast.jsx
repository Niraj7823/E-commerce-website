import React from "react";

const InfoToast = ({ message }) => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white text-black px-6 py-3 rounded shadow-lg text-sm font-medium relative overflow-hidden">
        {message}
        <div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-timer"
          style={{ animationDuration: "2s", width: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default InfoToast;
