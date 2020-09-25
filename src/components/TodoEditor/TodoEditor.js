import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoEditor.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className={styles.TodoEditor} onSubmit={this.handleSubmit}>
        <textarea
          className={styles.textarea}
          value={this.state.message}
          onChange={this.handleChange}
        >
          {' '}
        </textarea>
        <button type="submit" className={styles.button}>
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
