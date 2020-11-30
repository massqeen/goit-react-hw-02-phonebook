import { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import PropTypes from 'prop-types';

function InputPhone({ submitted, onChange }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (submitted) {
      setValue('');
    }
  }, [submitted]);

  return (
    <PhoneInput
      defaultCountry="UA"
      international={true}
      withCountryCallingCode={true}
      value={value}
      onChange={(phoneValue) => {
        onChange(phoneValue);
        setValue(phoneValue);
      }}
      style={{ marginBottom: '10px' }}
    />
  );
}
InputPhone.propTypes = {
  onChange: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
};
export default InputPhone;
