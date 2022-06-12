import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import ThemeToggler from './ThemeToggler';
import {colors} from '../globalStyle';

const Navbar = ({}) => {
  const { books } = useContext(BookContext)
  const isDarkTheme = false;
  return(
    <div className='navbar'>
    {isDarkTheme?(
      <style>{`body {background: ${colors.greyish}  }`}</style>
      ):(
      <style>{`body {background: ${colors.whiteish}  }`}</style>
      )
    }
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
