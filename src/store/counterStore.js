import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authenticationReducer from './authenticationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  },
});
