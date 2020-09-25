import React from 'react';
import classNames from 'classnames';
import styles from './ContactList.module.css';

const boundClassNames = classNames.bind(styles);
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, text, completed }) => {
        const className = boundClassNames({
          [styles.item]: true,
          [styles.completed]: completed,
        });
        return (
          <li key={id} className={className}>
            <p className={styles.text}>{text}</p>
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
};

export default ContactList;
