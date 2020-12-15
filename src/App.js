import { useEffect, useState } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
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

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    savedContacts && setContacts(JSON.parse(savedContacts));
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const Duplicated = (name, number) => {
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
  };

  const addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    const duplicated = Duplicated(name, number);
    if (duplicated === 'name') {
      notify(`${name} уже есть в списке контактов`);
      return;
    }
    if (duplicated === 'number') {
      notify(`Номер ${number} уже сохранен в телефонной книге`);
      return;
    }
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const deleteContact = (contactId) =>
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );

  const changeFilter = (e) => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();
  const totalContactCount = contacts.length;
  const visibleContactCount = visibleContacts.length;
  return (
    <Container>
      <h1>Телефонная книга</h1>
      <Stats
        totalContacts={totalContactCount}
        visibleContacts={visibleContactCount}
      />
      <ContactEditor onSubmit={addContact} />
      {visibleContactCount > 0 && (
        <Filter value={filter} onChange={changeFilter} />
      )}
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      <ToastContainer />
    </Container>
  );
};

export default App;
