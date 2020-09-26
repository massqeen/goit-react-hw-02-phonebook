import React from 'react';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          id={id}
        />
      );
    })}
  </ul>
);

export default ContactList;
