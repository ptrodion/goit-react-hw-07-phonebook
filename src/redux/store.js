import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { clickReducer } from './contacts';
import { filterContacts } from './filter';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    changeContacts: clickReducer,
    filter: filterContacts,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
