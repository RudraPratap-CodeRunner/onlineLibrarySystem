import React from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

const BookList = (props) => {
  return (
    <div className='flex gap-6 flex-wrap justify-center items-center mt-4 bg-red-50'>
      {
        props.bookData.map(data=>(
          
            <Link to={`/bookdetails/${data.id}`} key={data.id}><Book key={data.id} bookDetails={data} /></Link>
         
        ))
      }
    </div>
  )
}

export default BookList