import PropTypes from 'prop-types';
import { Item, Text } from './ContactItemStyles';
import Button from '../../Button';

const ContactItem = ({ name, number, id = '', onDeleteContact }) => (
  <Item>
    <Text>{name}: </Text>
    <Text>{number}</Text>
    <Button type="button" onClick={() => onDeleteContact(id)}>
      Удалить
    </Button>
  </Item>
);
ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default ContactItem;
