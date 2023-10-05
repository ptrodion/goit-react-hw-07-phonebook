import { configureStore } from '@reduxjs/toolkit';
import { changeContacts } from './contacts';
import { filterContacts } from './filter';

export const store = configureStore({
  reducer: {
    changeContacts: changeContacts,
    filter: filterContacts,
  },
});
