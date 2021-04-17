import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ filterHandler }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryList = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));
  return (
    <div>
      <select onChange={(e) => filterHandler(e.target.value)}>
        {categoryList}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func,
};

CategoryFilter.defaultProps = {
  filterHandler: () => {},
};

export default CategoryFilter;
