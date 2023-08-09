import { configureStore } from '@reduxjs/toolkit';
import astroDataReducer from '../features/astroSlice'

export const store = configureStore({
  reducer: {
    astroData: astroDataReducer,
  },
});
