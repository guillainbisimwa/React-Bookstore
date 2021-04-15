import React, { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => {
  const [bookName, setBookName] = useState('');
  const [bookCat, setBookCat] = useState('');

  const handleInput = ({ target: { value } }) => setBookName(value);
  const handleSelect = ({ target: { value } }) => setBookCat(value);

  return (
    <>
      <form>
        <input type="text" onChange={handleInput.bind(this)} value={bookName} />
        <select onChange={handleSelect.bind(this)} value={bookCat}>
          {categories.map((category) => (
            <option key={category} value={category}>{ category }</option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </>
  );
};

export default BooksForm;
