import { useSelector } from 'react-redux';
import {
  getStateContacts,
  getVisibleContacts,
} from 'redux/phonebook/phonebookSelectors';

const Stats = () => {
  const contacts = useSelector(getStateContacts);
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <div>
      <p>Всего контактов: {contacts.length}</p>
      <p>Показано контактов: {visibleContacts.length}</p>
    </div>
  );
};

export default Stats;
