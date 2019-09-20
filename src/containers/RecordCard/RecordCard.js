import React, { useState, useRef } from 'react';
import Icon from '../../components/Icon/Icon';
import './RecordCard.css';

export default function RecordCard({
  deleteHandler,
  editHandler,
  createdAt,
  editedAt,
  password,
  title
}) {
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);
  const elementWithPassword = useRef(null);

  const togglePasswordVisibility = () => {
    setPasswordIsHidden(!passwordIsHidden);
  }

  const copyPasswordHandler = event => {
    event.stopPropagation();
    let range = document.createRange();
    let selection = window.getSelection();
    range.selectNode(elementWithPassword.current);
    selection.addRange(range);
    document.execCommand('copy');
    setTimeout(() => selection.removeAllRanges(), 100);
  }

  return (
    <div className="record-card-component">
      <header className="record-card-component__icon-group">
        <Icon
          className="grey record-card-component__icon-group_icon"
          onClick={editHandler}
          tooltip="edit"
        >
          <i className="fas fa-pen" />
        </Icon>
        <Icon
          className="grey record-card-component__icon-group_icon"
          onClick={deleteHandler}
          tooltip="delete"
        >
          <i className="fas fa-trash" />
        </Icon>
      </header>
      <main className="record-card-component__content">
        <h3>title:</h3>
        <p>{title}</p>
        <h3>password:</h3>
        <p
          onClick={togglePasswordVisibility}
          onMouseDown={event => event.preventDefault()}
          className="record-card-component__content_password-field"
        >
          <span ref={elementWithPassword}>
            {passwordIsHidden ? '*'.repeat(password.length) : password}
          </span>
          {passwordIsHidden ? null :
            <Icon
              className="grey inline record-card-component__copy-button"
              onClick={copyPasswordHandler}
              tooltip="copy"
              padding="0"
              width="1rem"
              height="1rem"
              background="none"
            >
              <i className="fas fa-clone"></i>
            </Icon>
          }
        </p>
      </main>
      <footer>
        {createdAt ? <em>created: {createdAt}</em> : null}
        {editedAt ? <em>edited: {editedAt}</em> : null}
      </footer>
    </div>
  );
};