import { Component } from 'react';
import PropTypes from 'prop-types';
import { isValidPhoneNumber } from 'react-phone-number-input';
import InputPhone from '../InputPhone';
import { Editor, EditorButton, Input } from './ContactEditorStyles';

class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
    submitted: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    return this.setState({ [name]: value });
  };

  handleChangePhone = (value) => this.setState({ number: value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!isValidPhoneNumber(number)) {
      alert(`${number} is not valid phone number`);
      return;
    }
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '', submitted: true });
    this.resetSubmitted();
  };

  resetSubmitted() {
    setTimeout(() => this.setState({ submitted: false }), 1000);
  }

  render() {
    const { submitted } = this.state;
    return (
      <Editor onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={'Имя контакта'}
          name="name"
          minLength="2"
          required
        />
        <InputPhone submitted={submitted} onChange={this.handleChangePhone} />
        <EditorButton type="submit">Сохранить</EditorButton>
      </Editor>
    );
  }
}
ContactEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactEditor;
