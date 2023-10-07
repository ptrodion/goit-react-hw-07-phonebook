import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action, errorMessage) => {
  state.isLoading = false;
  if (action.error.name !== 'CanceledError') {
    alert(errorMessage);
  }
};

const contactsSlice = createSlice({
  name: 'changeContacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        handleRejected(
          state,
          action,
          'Something was wrong while fetching contacts.'
        );
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(
          state,
          action,
          'Something went wrong while adding a contact.'
        );
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state, action);
        state.items = state.items.filter(el => el.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(
          state,
          action,
          'Something went wrong while deleting a contact.'
        );
      });
  },
});

export const changeContacts = contactsSlice.reducer;
