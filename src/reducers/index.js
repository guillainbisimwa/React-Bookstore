import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const mainReducer = combineReducers({
  bookReducer,
  filterReducer,
});

const store = createStore(mainReducer);

export default store;
