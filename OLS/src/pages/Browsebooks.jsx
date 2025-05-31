import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';

const Browsebooks = () => {
  const {category} = useParams();
  const books = useSelector((state) => state.books);
  const [filteredBooks,setFilteredBooks] = useState(books);
  const [searchText,setSearchText] = useState();
  const [isSearching,setisSearching] = useState(false);

  const handleSearch = (books,category)=>{
    const data = books.filter(book=>(book.title.toLowerCase().includes(searchText.toLowerCase())  ||book.author.toLowerCase().includes(searchText.toLowerCase()) ));
    setFilteredBooks(data);
    setisSearching(true);
    
  }

  const getFilteredBooks = (books)=>{
    const data = books.filter(item=>item.category==category);
    setFilteredBooks(data);
    setisSearching(false);
  }

  
  useEffect(()=>{
    if(category){
      getFilteredBooks(books);
    }
  },[])
  

  
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center my-8 gap-3 bg-red-50 p-4">
  <input
    className="bg-white w-full md:w-auto px-3 py-2 focus:outline-none focus:ring-2 shadow-sm focus:ring-blue-500"
    type="text"
    onChange={(e) => setSearchText(e.target.value)}
    placeholder="Book name / title"
  />
  <button
    onClick={() => handleSearch(books, category)}
    className="bg-blue-500 shadow-sm text-white w-full md:w-auto px-8 py-2"
  >
    Search
  </button>
</div>

      {!isSearching && category && (
        <h2 className='text-center text-xl font-semibold text-gray-700 mb-4 capitalize'>
          Category: {category}
        </h2>
      )}
      {
        isSearching&& (
          <h2 className='text-center text-blue-500 text-2xl font-bold'>Search Results :</h2>
        )
      }
      <BookList bookData={filteredBooks} />
    </div>
  )
}

export default Browsebooks