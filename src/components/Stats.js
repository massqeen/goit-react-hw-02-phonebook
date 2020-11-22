import PropTypes from 'prop-types';

const Stats = ({ totalContacts = 0, visibleContacts = 0 }) => (
  <div>
    <p>Всего контактов: {totalContacts}</p>
    <p>Показано контактов: {visibleContacts}</p>
  </div>
);
Stats.propTypes = {
  totalContacts: PropTypes.number,
  visibleContacts: PropTypes.number,
};
export default Stats;
