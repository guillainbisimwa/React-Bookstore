import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload.id);
    default:
      return state;
  }
};

export default bookReducer;
