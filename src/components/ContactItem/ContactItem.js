import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({ name, number, id, onDeleteContact }) => (
  <li className={styles.item}>
    <p className={styles.text}>{name}: </p>
    <p className={styles.text}>{number}</p>
    <button
      type="button"
      className={styles.btn}
      onClick={() => onDeleteContact(id)}
    >
      Удалить
    </button>
  </li>
);

export default ContactItem;
