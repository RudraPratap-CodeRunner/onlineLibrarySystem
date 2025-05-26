import React from 'react'
import BookList from '../components/BookList'
import { useParams } from 'react-router-dom'
import books from '../utils/mockData'

const Browsebooks = () => {
  const {category} = useParams();
  

  console.log(category);
  return (
    <div>
      <BookList />
    </div>
  )
}

export default Browsebooks