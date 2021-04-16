export const CREATE_BOOK = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

export const REMOVE_BOOK = (id) => ({
  type: 'REMOVE_BOOK',
  payoad: id,
});
