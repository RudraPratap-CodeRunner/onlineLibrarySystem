import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <p className="text-red-600 text-xl font-semibold">Book not found.</p>
        <button
          onClick={() => navigate('/books/all')}
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center px-4 py-10">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 space-y-4">
        {book.cover_image && (
          <img
            className="w-full h-64 object-cover rounded-md"
            src={book.cover_image}
            alt={book.title}
          />
        )}

        <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
        <h3 className="text-lg text-gray-600">by {book.author}</h3>

        <p className="text-gray-700">
          <span className="font-semibold">Description:</span> {book.description}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Rating:</span> {book.rating}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Category:</span> {book.category}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Popular:</span> {book.popularity ? 'Yes' : 'No'}
        </p>

        <button
          onClick={() => navigate('/books/all')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Back to Browse
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
