import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'changeContacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.name !== 'CanceledError') {
          alert(`Something was wrong.`);
        }
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const changeContacts = contactsSlice.reducer;
