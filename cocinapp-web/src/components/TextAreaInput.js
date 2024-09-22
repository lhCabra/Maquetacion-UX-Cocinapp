// src/components/TextAreaInput.js
import React from 'react';

const TextAreaInput = ({ label, placeholder }) => {
  return (
    <div className="form-group">
      <label className="label-top">{label}</label>
      <textarea
        placeholder={placeholder}
        className="input-field form-control custom-textarea"
        rows="12" 
        style={{ fontSize: '20px' }}
      />
    </div>
  );
};

export default TextAreaInput;
