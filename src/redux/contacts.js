import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'changeContacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            id: nanoid(5),
            ...value,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const changeContacts = contactsSlice.reducer;
