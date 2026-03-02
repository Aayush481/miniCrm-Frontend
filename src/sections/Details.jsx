import React from 'react';
import { FiX } from "react-icons/fi";

const Details = ({ 
  img, 
  label, 
  title, 
  description, 
  packages, 
  type, 
  location, 
  tags, 
  onClose 
}) => {
  return (
    <section className="
      fixed top-16 sm:top-20 
      left-1/2 -translate-x-1/2 
      w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%]
      h-[90%] sm:h-[85%] lg:h-[80%]
      bg-black rounded-lg shadow-lg 
      flex flex-col md:flex-row
      p-4 sm:p-6
      z-50
      overflow-y-auto
    ">
      
      {/* Image */}
      <img 
        src={img} 
        alt={label || "Details image"} 
        className="
          w-full md:w-[40%]
          aspect-square
          object-cover
          rounded-lg
          mb-4 md:mb-0
        " 
      />

      {/* Content */}
      <div className="
        flex flex-col 
        justify-center items-center
        gap-6 sm:gap-8 lg:gap-10
        md:ml-6
        w-full md:w-[60%]
        text-center
      ">
        <h2 className="text-white text-lg sm:text-xl font-semibold">
          {title}
        </h2>

        <h4 className="text-gray-200 text-sm sm:text-base">
          {description}
        </h4>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {type && (
            <p className="bg-pink-800 text-white px-3 py-1 text-xs sm:text-sm rounded-full">
              {type}
            </p>
          )}
          {packages && (
            <p className="bg-pink-800 text-white px-3 py-1 text-xs sm:text-sm rounded-full">
              {packages}
            </p>
          )}
          {location && (
            <p className="bg-pink-800 text-white px-3 py-1 text-xs sm:text-sm rounded-full">
              {location}
            </p>
          )}
          {tags && tags.map((tag, idx) => (
            <p
              key={idx}
              className="bg-pink-800 text-white px-3 py-1 text-xs sm:text-sm rounded-full"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>

      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-3 right-3 focus:outline-none"
        aria-label="Close details"
      >
        <FiX size={26} className="text-white hover:text-pink-500 transition" />
      </button>
    </section>
  );
};

export default Details;
