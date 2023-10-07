import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651f22a444a3a8aa476978a0.mockapi.io/';
// axios.defaults.baseURL = 'https://51f22a444a3a8aa476978a0.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async signal => {
    const response = await axios.get('/contacts', { signal });
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const response = await axios.post('/contacts', contactData);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);
