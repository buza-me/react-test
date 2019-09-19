import React from 'react';
import './Spinner.css';

export default function Spinner({ className }) {
  return (
    <div className={`spinner-component ${className}`}>
      <div className="spinner" />
    </div>
  );
};