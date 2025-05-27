import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
  const {id} = useParams();
  console.log(id);

  return (
    <div>
      
    </div>
  )
}

export default BookDetails