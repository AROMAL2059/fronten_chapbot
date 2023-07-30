// src/reducers/studentReducer.js
const initialState = {
    name: '',
    age: '',
  };
  
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_STUDENT':
        return {
          ...state,
          name: action.payload.name,
          age: action.payload.age,
        };
      default:
        return state;
    }
  };

  export default studentReducer;
  