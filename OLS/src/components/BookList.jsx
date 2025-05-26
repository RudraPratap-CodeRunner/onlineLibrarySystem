import React from 'react'
import books from '../utils/mockData'
import {Link} from 'react-router-dom'
import Book from './Book'

const BookList = () => {
  return (
    <div className='flex gap-6 flex-wrap justify-center items-center mt-4'>
      {
        books.map(data=>(
          
            <Link to='/bookdetails/{data.id}' key={data.id}><Book key={data.id} bookDetails={data} /></Link>
         
        ))
      }
    </div>
  )
}

export default BookList