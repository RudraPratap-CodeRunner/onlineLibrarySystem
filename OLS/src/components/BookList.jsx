import React from 'react';
import Book from './Book';

const BookList = (props) => {
  return (
    <div className="flex flex-wrap justify-center mt-4 bg-red-50 px-4">
      {
        props.bookData.map(data => (
          <div key={data.id} className="m-4"> {/* Custom space around each book */}
            <Book bookDetails={data} />
          </div>
        ))
      }
    </div>
  );
};

export default BookList;
