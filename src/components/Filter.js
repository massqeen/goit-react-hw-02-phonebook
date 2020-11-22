import PropTypes from 'prop-types';

const Filter = ({ value = '', onChange }) => (
  <label>
    Фильтр по имени:
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{ marginLeft: '1em', marginBottom: '1em' }}
    />
  </label>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
