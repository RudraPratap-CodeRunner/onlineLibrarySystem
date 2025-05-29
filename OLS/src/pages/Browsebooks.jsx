import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import { useParams } from 'react-router-dom'
import books from '../utils/mockData'
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
  

  console.log(filteredBooks);
  
  return (
    <div>
      <div className='flex items-center justify-center m-3 gap-3 bg-red-50'>
        <input className='bg-white px-3  py-1' type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder='book name / title' />
        <button onClick={()=>handleSearch(books,category)}  className='bg-blue-500 text-white px-8 py-1'>Search</button>
     </div>
      {!isSearching && category && (
        <h2 className='text-center text-xl font-semibold text-gray-700 mb-4 capitalize'>
          Category: {category}
        </h2>
      )}
      {
        isSearching&& (
          <h2>Search Results:</h2>
        )
      }
      <BookList bookData={filteredBooks} />
    </div>
  )
}

export default Browsebooks