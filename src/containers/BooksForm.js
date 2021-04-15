import React, { useState } from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const BooksForm = () => {
  const [bookValue, setBookValue] = useState('');

  const handleChange = ({ target: { value } }) => setBookValue(value);

  return (
    <>
      <form>
        <input type="text" />
        <select onChange={handleChange.bind(this)} value={bookValue}>
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
