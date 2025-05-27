import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import { useParams } from 'react-router-dom'
import books from '../utils/mockData'


const Browsebooks = () => {
  const {category} = useParams();
  const [filteredBooks,setFilteredBooks] = useState(books);
  const [searchText,setSearchText] = useState();

  const handleSearch = (books)=>{
    const data = books.filter(book=>(book.title.toLowerCase().includes(searchText.toLowerCase())  ||book.author.toLowerCase().includes(searchText.toLowerCase()) ));
    setFilteredBooks(data);
  }

  const getFilteredBooks = (books)=>{
    const data = books.filter(item=>item.category==category);
    setFilteredBooks(data);
  }

  if(category){
    useEffect(()=>{
    getFilteredBooks(books);
  },[])
  }

  console.log(filteredBooks);
  
  return (
    <div>
      <div className='flex items-center justify-center m-3 gap-3'>
        <input className='bg-white px-3  py-1' type="text" onChange={(e)=>setSearchText(e.target.value)} placeholder='book name / title' />
        <button onClick={()=>handleSearch(books)}  className='bg-blue-500 text-white px-8 py-1'>Search</button>
     </div>
      <BookList bookData={filteredBooks} />
    </div>
  )
}

export default Browsebooks