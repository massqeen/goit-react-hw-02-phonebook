import { createStore } from 'redux';
import { combineReducers } from 'redux';
import phonebookReducer from './phonebook/phonebookReducer';

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
