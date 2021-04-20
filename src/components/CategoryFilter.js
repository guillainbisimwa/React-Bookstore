import React from 'react';
import PropTypes from 'prop-types';
import { Box, MenuItem, TextField } from '@material-ui/core';

const CategoryFilter = ({ filterHandler }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const categoryList = categories.map((category) => (
    <MenuItem key={category} value={category}>
      {category}
    </MenuItem>
  ));
  return (
    <Box pt={5}>
      <TextField
        onChange={(e) => filterHandler(e.target.value)}
        select
        fullWidth
        label="Select a category"
        variant="outlined"
      >
        {categoryList}
      </TextField>
    </Box>
  );
};

CategoryFilter.propTypes = {
  filterHandler: PropTypes.func,
};

CategoryFilter.defaultProps = {
  filterHandler: () => {},
};

export default CategoryFilter;
