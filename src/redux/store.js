import { configureStore } from '@reduxjs/toolkit';
import { clickReducer } from './contacts';
import { filterContacts } from './filter';

export const store = configureStore({
  reducer: {
    changeContacts: clickReducer,
    filter: filterContacts,
  },
});
