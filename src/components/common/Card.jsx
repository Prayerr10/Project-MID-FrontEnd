import React from 'react';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;