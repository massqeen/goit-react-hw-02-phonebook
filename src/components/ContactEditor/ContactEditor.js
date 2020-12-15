import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import InputPhone from '../InputPhone';
import { Editor, EditorButton, Input } from './ContactEditorStyles';

const notify = (warnText) =>
  toast.warning(warnText, {
    position: 'top-center',
    autoClose: 3000,
  });

const ContactEditor = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
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
    onSubmit(name, number);
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
        onChange={handleChange}
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

ContactEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactEditor;
