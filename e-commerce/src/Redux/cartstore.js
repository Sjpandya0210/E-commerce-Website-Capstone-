import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userId: null,
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'SET_USER_ID':
      return { ...state, userId: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    // Add more cases for other actions as needed
    default:
      return state;
  }
};

const cartstore = configureStore({
  reducer,
});

export default cartstore;