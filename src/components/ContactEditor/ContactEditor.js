import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactEditor.module.css';
import InputPhone from '../InputPhone';

class ContactEditor extends Component {
  state = {
    name: '',
    submitted: false,
  };

  phoneNumber = '';

  handleChange = (e) => {
    const { name, value } = e.target;
    this.resetSubmitted();
    return this.setState({ [name]: value });
  };

  handleChangePhone = (value) => (this.phoneNumber = value);

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.onSubmit(name, this.phoneNumber);
    this.setState({ name: '', submitted: true });
    this.phoneNumber = '';
  };

  resetSubmitted = () => {
    this.setState({ submitted: false });
  };

  render() {
    const { submitted } = this.state;
    return (
      <form className={styles.editor} onSubmit={this.handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={'Имя контакта'}
          name="name"
          minLength="2"
          required
        />
        {/* <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          className={styles.input}
          value={this.state.number}
          onChange={this.handleChange}
          placeholder={'Телефон в формате 111-111-11-11'}
          name="number"
        /> */}
        <InputPhone submitted={submitted} onChange={this.handleChangePhone} />
        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </form>
    );
  }
}
ContactEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactEditor;
