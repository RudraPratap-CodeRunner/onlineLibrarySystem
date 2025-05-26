import React from 'react'

const BookCategory = (props) => {
    
  return (
    <div className='flex flex-col justify-center items-center bg-yellow-100 w-48 h-48'>
        <strong>{props.categoryInformation}</strong>
        <p></p>
    </div>
  )
}

export default BookCategory