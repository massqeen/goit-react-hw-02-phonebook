import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts = [], onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          id={id}
        />
      );
    })}
  </ul>
);
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};
export default ContactList;
