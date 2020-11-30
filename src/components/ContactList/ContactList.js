import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import List from './ContactListStyles';

const ContactList = ({ contacts = [], onDeleteContact }) => (
  <List>
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
  </List>
);
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};
export default ContactList;
