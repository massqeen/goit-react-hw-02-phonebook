import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactEditor.module.css';
import InputPhone from '../InputPhone';

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
