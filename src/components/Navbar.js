import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import ThemeToggler from './ThemeToggler';

const Navbar = ({}) => {
  const { books } = useContext(BookContext)
  return(
    <div className='navbar'>
      <div className="wrapper">
        <h1>My List of book</h1>
        <ThemeToggler />
      </div>
      <h4>(that I'll probs never read)</h4>
      <p>you have {books.length} books to read (or not)</p>
    </div>
  )
}

export default Navbar;
