import React from 'react'

const Book = (props) => {
  return (
    <div className='w-[200px] h-[350px] shadow-lg border-[0.5px] transition-transform duration-300 ease-in-out transform hover:scale-[1.05] border-gray-200 cursor-pointer bg-gray-100'>
      <img src={props.bookDetails.cover_image} className='w-full h-[200px]' alt="" />
      <div className='p-2 mt-1 '>
        <h2 className='font-bold text-xs'>Book Name : {props.bookDetails.title}</h2>
        <h2 className='font-bold text-xs'>Author : {props.bookDetails.author}</h2>
        <p className='text-xs text-gray-950'>{props.bookDetails.description}</p>
      </div>
    </div>
  )
}

export default Book