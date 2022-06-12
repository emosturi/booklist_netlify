import React, {useContext, useState} from 'react';
import {BookContext} from '../contexts/BookContext';

const BookForm = ({}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const {dispatch} = useContext(BookContext)

  const handleSubmit = (eco) => {
    eco.preventDefault()
    dispatch({type:'ADD_BOOK', book: { author, title} })
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Book title...'
        value={title}
        required
        onChange={(event)=>setTitle(event.target.value)} />
      <input
        type="text"
        placeholder='Book author...'
        required
        value={author}
        onChange={(event)=>setAuthor(event.target.value)} />
      <input type="submit" value='Add Book'/>
    </form>
  );
}

export default BookForm;
