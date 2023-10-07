import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.changeContacts;
export const selectContacts = state => state.changeContacts.items;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);