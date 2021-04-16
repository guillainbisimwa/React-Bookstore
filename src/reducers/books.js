import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const defaultBooks = [
  {
    id: Math.floor(Math.random() * 100), title: 'The Title 1', category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 100), title: 'The Title 2', category: 'Biography',
  },
  {
    id: Math.floor(Math.random() * 100), title: 'The Title 3', category: 'Learning',
  },
];

const bookReducer = (state = defaultBooks, { type, payload }) => {
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
