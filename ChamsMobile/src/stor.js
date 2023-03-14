import { createStore } from 'redux';

const initialState = {
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
