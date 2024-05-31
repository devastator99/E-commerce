import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Cart/CartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
