import { useSelector } from 'react-redux';
import { getStateFilter } from 'redux/phonebook/phonebookSelectors';
import { changeFilter } from 'redux/phonebook/phonebookActions';

const Filter = () => {
  const value = useSelector(getStateFilter);
  const changeValue = (e) => changeFilter(e.currentTarget.value);
  return (
    <label>
      Фильтр по имени:
      <input
        type="text"
        value={value}
        onChange={changeValue}
        style={{ marginLeft: '1em', marginBottom: '1em' }}
      />
    </label>
  );
};

export default Filter;
