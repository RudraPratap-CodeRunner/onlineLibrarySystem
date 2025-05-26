import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul className='flex gap-6 justify-center items-center my-4 font-semibold text-xl '>
          <Link to='/'><li>Home</li></Link>
          <Link to='/browsebooks'><li>Browse Books</li></Link>
          <Link to='/addbooks'><li>Add Book</li></Link>
        </ul>
    </div>
  )
}

export default Header