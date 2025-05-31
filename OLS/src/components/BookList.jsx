import React from 'react';
import Book from './Book';

const BookList = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 bg-red-50 px-4">
      {
        props.bookData.map(data => (
          <Book key={data.id} bookDetails={data} />
        ))
      }
    </div>
  );
};

export default BookList;
