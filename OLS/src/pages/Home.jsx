import React from 'react'
import Welcome from '../components/Welcome'

import PopularBooks from '../components/PopularBooks'
import BookCategory from '../components/BookCategory'
import { Link } from 'react-router-dom'

const Home = () => {
  const category = ['Fiction','Non-fiction','Self-help','History','Biography'];
  return (
    <div className='mx-auto'>
      <Welcome />
      <div className='flex justify-center items-center gap-4 mx-auto w-48 my-4'>
        {
        category.map(data=>(
          <Link to={`/browsebooks/${data.toLowerCase()}`} ><BookCategory  categoryInformation={data} /></Link>
        ))
        }
      </div>
      <PopularBooks />
      </div>
  )
}

export default Home