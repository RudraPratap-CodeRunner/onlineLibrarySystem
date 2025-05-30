import React from 'react'
import Welcome from '../components/Welcome'

import PopularBooks from '../components/PopularBooks'
import BookCategory from '../components/BookCategory'
import { Link } from 'react-router-dom'
import CategoryCards from '../components/CategoryCards '


const Home = () => {
  const category = ['Fiction','Non-fiction','Self-help','History','Biography'];
  return (
    <div className='mx-auto'>
      <Welcome />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
  {/* Heading */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
    Explore Book Categories Tailored to Every Reader
  </h1>

  {/* Categories Grid */}
  <div className="flex flex-wrap justify-center items-center gap-4">
    {category.map((data) => (
      <Link
        to={`/browsebooks/${data.toLowerCase()}`}
        key={data}
        className="transition-transform transform hover:scale-105"
      >
        <BookCategory categoryInformation={data} />
      </Link>
    ))}
  </div>
</div>

      <PopularBooks />
      
      </div>
  )
}

export default Home