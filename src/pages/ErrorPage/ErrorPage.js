import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
  return (
    <div className="error-page-wrapper">
      <h1 className="error-page-header">
        page not found,
        <Link to="/">return</Link>
      </h1>
    </div>
  );
};