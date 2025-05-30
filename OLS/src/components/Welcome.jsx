import React from 'react';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-12 px-4 sm:px-6 lg:px-8">
      <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gray-800 pb-4 leading-tight">
        Welcome to Your <span className="text-indigo-600">Online Book Haven</span>
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl">
        Discover a world of <span className="italic">stories</span>, <span className="italic">knowledge</span>, and <span className="italic">imagination</span>.
      </p>
    </div>
  );
};

export default Welcome;
