import React from 'react';
import './Icon.css';

export default function Icon({
  onClick,
  className,
  children,
  width,
  height,
  fontSize,
  tooltip
}) {
  return (
    <button
      style={{
        cursor: onClick ? "pointer" : null,
        fontSize,
        height,
        width
      }}
      className={`icon-component ${className}`}
      onClick={onClick}
    >
      {children}
      {!tooltip ? null :
        <p className="icon-component__tooltip">
          {tooltip}
        </p>
      }
    </button>
  );
};