import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi',
  ];
  const categoryList = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));
  return (
    <div>
      <select onChange={handleFilter}>
        {categoryList}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilter: () => {},
};

export default CategoryFilter;
