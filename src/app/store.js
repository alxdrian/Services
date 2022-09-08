import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from '../features/services/serviceSlice';

export const store = configureStore({
  reducer: {
    service: serviceReducer,
  },
});
