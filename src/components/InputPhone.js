import React, { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import PropTypes from 'prop-types';

function InputPhone({ onChange }) {
  const [value, setValue] = useState('+380');

  useEffect(() => {
    onChange(value);
  });

  return (
    <PhoneInput
      placeholder="Enter phone number"
      country="UA"
      value={value}
      onChange={setValue}
      style={{ marginBottom: '10px' }}
    />
  );
}
InputPhone.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default InputPhone;
