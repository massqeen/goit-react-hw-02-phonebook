import ContactItem from './ContactItem/ContactItem';
import List from './ContactListStyles';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/phonebook/phonebookSelectors';

const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};

export default ContactList;
