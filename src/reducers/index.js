import { createStore, combineReducers } from 'redux';
import bookReducer from './books';

const mainReducer = combineReducers({
  bookReducer,
});

const store = createStore(mainReducer);

export default store;
