export const getStateContacts = (state) => state.phonebook.contacts;
export const getStateFilter = (state) => state.phonebook.filter;

export const getVisibleContacts = (state) => {
  const contacts = getStateContacts(state);
  const contactFilter = getStateFilter(state);
  const normalizedFilter = contactFilter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
