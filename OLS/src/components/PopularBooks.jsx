import React, { useEffect, useState } from 'react'
import books from '../utils/mockData'
import Book from './Book';
import { Link } from 'react-router-dom';

const PopularBooks = () => {
    const [popularBooks, setPopularBooks] = useState([]);

  const getPopularBooks = (books) => {
    const result = books.filter(data => data.popularity).slice(0, 5);
    setPopularBooks(result);
  };

  useEffect(() => {
    getPopularBooks(books);
  }, []);

 
  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-[#1E2939] mt-4 mb-6">Popular Books</h1>

        <div className='flex gap-6 flex-wrap justify-center items-center mt-4'>
            {
                popularBooks.map(data=>(
                    <Link to={`/bookdetails/${data.id}`} key={data.id}><Book key={data.id} bookDetails={data} /></Link>
                ))
            }
        </div>

    </div>
  )
}

export default PopularBooks