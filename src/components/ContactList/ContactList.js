import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id} className={styles.item}>
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
    })}
  </ul>
);

export default ContactList;
