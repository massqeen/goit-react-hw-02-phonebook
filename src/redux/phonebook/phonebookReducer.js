import { nanoid } from 'nanoid';
import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const getContacts = createAction('GET_CONTACTS', (contacts) => ({
  payload: {
    contacts,
  },
}));

export const addContact = createAction('ADD_CONTACT', (name, number) => ({
  payload: {
    contact: { name, number, id: nanoid(10) },
    showError: false,
  },
}));

export const deleteContact = createAction('DELETE_CONTACT');
export const changeFilter = createAction('CHANGE_FILTER');

const onGetContacts = (state, { payload }) => ({
  ...state,
  contacts: [...state.contacts, ...payload.contacts],
});

const onAddContact = (state, { payload }) => ({
  ...state,
  contacts: [
    ...state.contacts,
    {
      name: payload.contact.name,
      number: payload.contact.number,
      id: payload.contact.id,
    },
  ],
});

const onDeleteContact = (state, { payload }) => ({
  ...state,
  contacts: state.contacts.filter((contact) => contact.id !== payload),
});

const onChangeFilter = (state, { payload }) => ({
  ...state,
  filter: payload,
});

const phonebookReducer = createReducer(initialState, {
  [getContacts.type]: onGetContacts,
  [addContact.type]: onAddContact,
  [deleteContact.type]: onDeleteContact,
  [changeFilter.type]: onChangeFilter,
});

export default phonebookReducer;
