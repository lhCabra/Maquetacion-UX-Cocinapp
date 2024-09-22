// src/components/TextInput.js
import React from 'react';

const ShortTextInput = ({ label, placeholder, value, onChange}) => {
  return (
    <div className="form-group">
      <label className="label-top">{label}</label>
      <input
        type="text"
        placeholder={placeholder}

        value={value}
        onChange={onChange}
        className="input-field form-control custom-textarea"
      />
    </div>
  );
};

export default ShortTextInput;
