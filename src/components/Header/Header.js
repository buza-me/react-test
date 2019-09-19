import React from 'react';
import './Header.css';

export default function Header({ children, title }) {
  return (
    <header className="header-component">
      <h1 className="header-component__title">{title}</h1>
      <p className="header-component__content">
        {children}
      </p>
    </header>
  );
};