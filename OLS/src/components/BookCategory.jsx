import React from 'react';

const BookCategory = ({ categoryInformation }) => {
  return (
    <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-yellow-100 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center text-center cursor-pointer">
      <strong className="text-gray-800 text-lg sm:text-xl">{categoryInformation}</strong>
    </div>
  );
};

export default BookCategory;
