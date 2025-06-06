import React from 'react';
import { useNavigate } from 'react-router-dom';

const Book = ({ bookDetails }) => {
  const navigate = useNavigate();
  return (
    <div  className=" w-[90%] sm:w-[250px] h-[370px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105  mx-auto mb-8">
      <img
        src={bookDetails.cover_image}
        alt={bookDetails.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-3 flex flex-col justify-between h-[170px]">
        <div className="mb-2">
          <h2 className="font-semibold text-sm text-gray-800 truncate">
            📘 {bookDetails.title}
          </h2>
          <h3 className="text-sm text-gray-600">✍️ {bookDetails.author}</h3>
        </div>
        <p className="text-xs text-gray-700 line-clamp-3 mb-3">
          {bookDetails.description}
        </p>
        <button onClick={()=>navigate(`/bookdetails/${bookDetails.id}`)} className=" cursor-pointer mt-auto text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Book;
