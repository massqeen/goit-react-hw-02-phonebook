import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container/Container';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor/ContactEditor';
import Filter from './components/Filter';
import initialContacts from './contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  isContact(name) {
    const { contacts } = this.state;
    return contacts.filter((contact) => contact.name === name);
  }

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    if (this.isContact()) {
      alert('name is already in contacts');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = (contactId) =>
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));

  changeFilter = (e) => this.setState({ filter: e.currentTarget.value });

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
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
