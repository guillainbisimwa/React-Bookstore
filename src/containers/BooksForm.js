import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const dispatch = useDispatch();

  const [bookName, setBookName] = useState('');
  const [bookCat, setBookCat] = useState('');

  const handleInput = ({ target: { value } }) => setBookName(value);
  const handleSelect = ({ target: { value } }) => setBookCat(value);

  const handleSubmit = () => {
    dispatch(CREATE_BOOK({
      id: Math.floor(Math.random() * 1000),
      title: bookName,
      category: bookCat,
    }));
    setBookName('');
    setBookCat('');
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleInput.bind(this)} value={bookName} />
        <select onChange={handleSelect.bind(this)} value={bookCat}>
          {categories.map((category) => (
            <option key={category} value={category}>{ category }</option>
          ))}
        </select>
        <input type="submit" onClick={handleSubmit.bind(this)} />
      </form>
    </>
  );
};

export default BooksForm;
