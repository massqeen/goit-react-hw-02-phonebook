import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container/Container';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor/ContactEditor';
import Filter from './components/Filter';
import initialTodos from './todos.json';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (text) => {
    const contact = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const totalContactCount = contacts.length;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        {/* TODO: вынести в отдельный компонент */}

        <div>
          <h1>Телефонная книга</h1>
          <p>Всего контактов: {totalContactCount}</p>
        </div>

        <ContactEditor onSubmit={this.addContact} />

        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
