// src/components/TextAreaInput.js
import React from 'react';

const ListItem = ({ title, description }) => {
  return (
    <div className="list-item">
    <span>{title}</span>
    <span>{description}</span>
    </div>
  );
};

export default ListItem;
