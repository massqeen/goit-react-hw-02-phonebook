import React, { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import PropTypes from 'prop-types';

function InputPhone({ submitted, onChange }) {
  const [value, setValue] = useState('+380');

  useEffect(() => {
    onChange(value);
    if (submitted) {
      setValue('+380');
    }
  }, [submitted]);

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
  submitted: PropTypes.bool.isRequired,
};
export default InputPhone;
