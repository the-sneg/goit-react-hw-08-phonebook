import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  isLoading: false,
  isDeleting: false,
  isAdd: false,
  contacts: {
    items: [],
    filter: {
      value: '',
    },
  },
};

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://63358cbe8aa85b7c5d1dc3e5.mockapi.io/contacts'
      );

      if (!response.ok) {
        throw new Error('Error:(');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(
        `https://63358cbe8aa85b7c5d1dc3e5.mockapi.io/contacts/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Sorry cant delete:(');
      }

      dispatch(removeContact(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async function (data, { rejectWithValue, dispatch }) {
    try {
      const contact = {
        name: data.name,
        phone: data.phone,
      };

      const response = await fetch(
        `https://63358cbe8aa85b7c5d1dc3e5.mockapi.io/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error('Sorry cant add contact:(');
      }

      dispatch(setContact(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter.value = action.payload;
    },
    setContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    removeContact: (state, action) => {
      let indexId = state.contacts.items.findIndex(
        el => el.id === action.payload
      );

      if (indexId === -1) {
        return alert(`Item with ${action.id} not wound`);
      }

      state.contacts.items.splice(indexId, 1);
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: setError,

    [deleteContacts.pending]: state => {
      state.isDeleting = true;
    },
    [deleteContacts.fulfilled]: state => {
      state.isDeleting = false;
    },
    [deleteContacts.rejected]: setError,

    [addContacts.pending]: state => {
      state.isLoading = true;
      state.isAdd = true;
    },
    [addContacts.fulfilled]: state => {
      state.isLoading = false;
      state.isAdd = false;
    },
    [addContacts.rejected]: setError,
  },
});

export const { setFilter, setContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
