import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[85vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-4 border-gray-300 border-t-purple-500 animate-spin"></div>
    </div>
  );
};

export default Loader;
