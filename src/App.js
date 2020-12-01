import { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container/Container';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor/ContactEditor';
import Filter from './components/Filter';
import initialContacts from './contacts.json';
import Stats from './components/Stats';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    // eslint-disable-next-line react/no-did-mount-set-state
    savedContacts && this.setState({ contacts: JSON.parse(savedContacts) });
  }

  isDuplicated(name, number) {
    const { contacts } = this.state;
    const repeatedContact = contacts.filter((contact) => contact.name === name);
    const repeatedNumber = contacts.filter(
      (contact) => contact.number === number
    );
    let duplicate = null;
    if (repeatedContact.length > 0) {
      duplicate = 'name';
      return duplicate;
    }
    if (repeatedNumber.length > 0) {
      duplicate = 'number';
      return duplicate;
    }
    return duplicate;
  }

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    const duplicated = this.isDuplicated(name, number);
    if (duplicated === 'name') {
      alert(`${name} уже есть в списке контактов`);
      return;
    }
    if (duplicated === 'number') {
      alert(`Номер ${number} уже сохранен в телефонной книге`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
    const visibleContacts = this.getVisibleContacts();
    const totalContactCount = contacts.length;
    const visibleContactCount = visibleContacts.length;

    return (
      <Container>
        <h1>Телефонная книга</h1>
        <Stats
          totalContacts={totalContactCount}
          visibleContacts={visibleContactCount}
        />
        <ContactEditor onSubmit={this.addContact} />
        {visibleContactCount > 0 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
