import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CHANGE_FILTER,
  GET_CONTACTS,
} from './phonebookActionTypes';

const initialState = {
  contacts: [],
  filter: '',
  showError: false,
};

const phonebookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: [...state.contacts, ...payload.contacts],
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: payload.contact.id,
            name: payload.contact.name,
            number: payload.contact.number,
          },
        ],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload.id),
      };

    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload.filter,
      };

    default:
      return state;
  }
};

export default phonebookReducer;
