import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactEditor.module.css';

class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    return this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
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
        />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          className={styles.input}
          value={this.state.number}
          onChange={this.handleChange}
          placeholder={'Телефон в формате 111-111-11-11'}
          name="number"
        />
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
