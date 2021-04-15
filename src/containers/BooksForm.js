import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
    <>
      <form>
        <input type="text" />
        <select>
          {categories.map((category) => (
            <option key={category} value={category}>{ category }</option>
          ))}
        </select>
        <input type="submit" />
      </form>
    </>
);

export default BooksForm;
