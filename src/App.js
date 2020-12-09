import { Component } from 'react';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container/Container';
import ContactList from './components/ContactList/ContactList';
import ContactEditor from './components/ContactEditor/ContactEditor';
import Filter from './components/Filter';
import initialContacts from './contacts.json';
import Stats from './components/Stats';

const notify = (warnText) =>
  toast.warning(warnText, {
    position: 'top-center',
    autoClose: 3000,
  });

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

  Duplicated(name, number) {
    const { contacts } = this.state;
    const repeatedContact = contacts.find((contact) => contact.name === name);
    const repeatedNumber = contacts.find(
      (contact) => contact.number === number
    );
    let duplicate = null;
    if (repeatedContact) {
      duplicate = 'name';
      return duplicate;
    }
    if (repeatedNumber) {
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
    const duplicated = this.Duplicated(name, number);

    if (duplicated === 'name') {
      notify(`${name} уже есть в списке контактов`);
      return;
    }
    if (duplicated === 'number') {
      notify(`Номер ${number} уже сохранен в телефонной книге`);
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
