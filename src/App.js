import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/phonebook/phonebookActions';
import {
  getStateContacts,
  getVisibleContacts,
} from 'redux/phonebook/phonebookSelectors';
import { ToastContainer } from 'react-toastify';
import Container from 'components/Container';
import ContactList from 'components/ContactList';
import ContactEditor from 'components/ContactEditor';
import Filter from 'components/Filter';
import initialContacts from 'contacts.json';
import Stats from 'components/Stats';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getStateContacts);
  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    if (localStorage.getItem('contacts') !== null) {
      const contactsFromLocal = JSON.parse(localStorage.getItem('contacts'));
      dispatch(getContacts(contactsFromLocal));
    } else {
      dispatch(getContacts(initialContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Телефонная книга</h1>
      <Stats />
      <ContactEditor />
      {visibleContacts.length > 0 && <Filter />}
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default App;
