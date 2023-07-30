// src/store.js
import { createStore } from 'redux';

const initialState = {
  name: '',
  age: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
