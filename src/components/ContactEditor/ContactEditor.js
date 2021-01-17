import { useState } from 'react';
import { toast } from 'react-toastify';
import InputPhone from 'components/InputPhone';
import { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-toastify/dist/ReactToastify.css';
import { Editor, EditorButton, Input } from './ContactEditorStyles';
import { addContact } from 'redux/phonebook/phonebookReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getStateContacts } from 'redux/phonebook/phonebookSelectors';

const notify = (warnText) =>
  toast.warning(warnText, {
    position: 'top-center',
    autoClose: 3000,
  });

const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getStateContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isDuplicated = () => {
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

  const addVerifiedContact = () => {
    const duplicated = isDuplicated(name, number);
    if (duplicated === 'name') {
      notify(`${name} уже есть в списке контактов`);
      return;
    }
    if (duplicated === 'number') {
      notify(`Номер ${number} уже сохранен в телефонной книге`);
      return;
    }
    dispatch(addContact(name, number));
  };

  const handleChangeName = (e) => {
    const { value } = e.target;
    return setName(value);
  };

  const handleChangePhone = (value) => setNumber(value);

  const resetSubmitted = () => {
    setTimeout(() => setSubmitted(false), 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPhoneNumber(number)) {
      notify(`${number} is not valid phone number`);
      return;
    }
    addVerifiedContact(name, number);
    setName('');
    setNumber('');
    setSubmitted(true);
    resetSubmitted();
  };

  return (
    <Editor onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder={'Имя контакта'}
        name="name"
        minLength="2"
        required
      />
      <InputPhone submitted={submitted} onChange={handleChangePhone} />
      <EditorButton type="submit">Сохранить</EditorButton>
    </Editor>
  );
};

export default ContactEditor;
