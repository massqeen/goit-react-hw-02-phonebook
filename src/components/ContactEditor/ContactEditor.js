import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactEditor.module.css';

class ContactEditor extends Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);

    this.setState({ name: '' });
  };

  render() {
    return (
      <form className={styles.editor} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          value={this.state.name}
          onChange={this.handleChange}
          placeholder={'Имя контакта'}
        />
        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </form>
    );
  }
}

export default ContactEditor;
