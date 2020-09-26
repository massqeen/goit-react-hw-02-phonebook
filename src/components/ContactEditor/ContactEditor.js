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
        />
        <input
          type="tel"
          className={styles.input}
          value={this.state.number}
          onChange={this.handleChange}
          placeholder={'Номер телефона'}
          name="number"
        />
        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </form>
    );
  }
}

export default ContactEditor;
