import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const handleInput = ({ target: { value } }) => setBookName(value);
  const handleSelect = ({ target: { value } }) => setBookCategory(value);

  const handleSubmit = () => {
    dispatch(createBook({
      id: Math.floor(Math.random() * 1000),
      title: bookName,
      category: bookCategory,
    }));
    setBookName('');
    setBookCategory('');
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleInput} value={bookName} />
        <select onChange={handleSelect} value={bookCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>{ category }</option>
          ))}
        </select>
        <input type="button" onClick={handleSubmit} value='Submit' />
      </form>
    </>
  );
};

export default BooksForm;
