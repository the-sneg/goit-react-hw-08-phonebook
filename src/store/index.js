import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './reducer';

export const store = configureStore({
  reducer: {
    contactsSlice,
  },
});
