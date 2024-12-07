import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children, width, height }) => {
  return (
    <button
      className={`${width} ${height} bg-primary-900 text-white px-4 py-2 rounded-md hover:bg-primary-hover transition-all duration-500`}
    >
      {children}
    </button>
  );
};

export default Button;
