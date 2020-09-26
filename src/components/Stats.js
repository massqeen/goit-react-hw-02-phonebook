import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ totalContacts, visibleContacts }) => (
  <div>
    <p>Всего контактов: {totalContacts}</p>
    <p>Показано контактов: {visibleContacts}</p>
  </div>
);
export default Stats;
