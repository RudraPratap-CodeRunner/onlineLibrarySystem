import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top-left Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 transition duration-200"
        >
          <HiArrowNarrowLeft className="w-5 h-5" />
          Back To Home
        </button>
      </div>

      {/* Centered Error Message */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
};

export default Error;
