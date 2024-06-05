import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Cart/CartSlice';
import productReducer from '../features/Product/ProductSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
