import React from 'react';
import { Link } from 'react-router-dom';
import bookCategories from '../utils/data';

const CategoryCards = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4">
      {bookCategories.map((cat) => (
        <Link
          to={`/browsebooks/${cat.name.toLowerCase()}`}
          key={cat.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800">{cat.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{cat.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCards;
