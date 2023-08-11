import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';

import infoReducer from '../features/info/infoSlice';

export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    info: infoReducer
  },
});
