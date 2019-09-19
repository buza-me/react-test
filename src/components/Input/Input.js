import React from 'react';
import './Input.css';

export default function Input({ onChange, className, value, type, name }) {
  return (
    <input
      className={`input-component ${className}`}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
    />
  );
};