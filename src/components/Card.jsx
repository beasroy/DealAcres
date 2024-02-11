import { IoShareSocial } from "react-icons/io5";
import React from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="relative max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 text-base">{description}</p>
        <button className="absolute bottom-0 right-0  text-gray-500 px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
          <IoShareSocial />
        </button>
      </div>
    </div>
  );
};

export default Card;
