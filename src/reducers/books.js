import { v4 as uuidv4 } from 'uuid';

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const defaultBooks = [
  {
    id: uuidv4(), title: 'The Wizarding World of Harry Potter', category: 'Horror',
  },
  {
    id: uuidv4(), title: 'The Big Read: The Top 100', category: 'Biography',
  },
  {
    id: uuidv4(), title: 'Speed-reading after lights out', category: 'Learning',
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
