import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterContacts',
  initialState: '',
  reducers: {
    filter(_, action) {
      return action.payload;
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterContacts = filterSlice.reducer;
