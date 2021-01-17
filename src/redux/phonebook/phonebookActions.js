import { nanoid } from 'nanoid';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
} from './phonebookActionTypes';

export const getContacts = (contacts) => {
  return {
    type: GET_CONTACTS,
    payload: {
      contacts,
    },
  };
};

export const addContact = (name, number) => {
  return {
    type: ADD_CONTACT,
    payload: {
      contact: { id: nanoid(10), name, number },
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: {
      id,
    },
  };
};

export const changeFilter = (value) => {
  return {
    type: CHANGE_FILTER,
    payload: {
      value,
    },
  };
};
