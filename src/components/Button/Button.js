import React from 'react';
import './Button.css';

export default function Button({ onClick, className, children, type, name }) {
  return (
    <button
      className={`button-component ${className}`}
      onClick={onClick}
      type={type}
      name={name}
    >
      {children}
    </button>
  );
};