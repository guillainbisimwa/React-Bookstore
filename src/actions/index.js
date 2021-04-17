export const createBook = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  payload: category,
});
