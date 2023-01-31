import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './Operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

const handleFetchContacts = (state, action) => {
  state.items = action.payload;
};

const handleAddContacts = (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteContacts = (state, action) => {
  const idx = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(idx, 1);
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContacts)
      .addCase(deleteContact.fulfilled, handleDeleteContacts)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anyFulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
