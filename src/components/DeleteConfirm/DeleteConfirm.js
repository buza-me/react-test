import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './DeleteConfirm.css';

export default function DeleteConfirm({ className, closeHandler, confirmHandler, rejectHandler }) {
  return (
    <div className="delete-confirm-component-wrapper" onClick={closeHandler}>
      <div className={`delete-confirm-component ${className}`} onClick={event => event.stopPropagation()}>
        <Icon
          className="delete-confirm-component__close-icon grey"
          onClick={closeHandler}
          tooltip="close"
        >
          <i className="fas fa-times" />
        </Icon>
        <h2 className="delete-confirm-component__header">
          <Icon className="red inline delete-confirm-component__header_icon">
            <i className="fas fa-exclamation" />
          </Icon>
          You will be unable to restore removed record.
        </h2>
        <p>Remove record?</p>
        <Button className="delete-confirm-component__button" onClick={confirmHandler}>Yes.</Button>
        <Button className="delete-confirm-component__button" onClick={rejectHandler}>No.</Button>
      </div>
    </div>
  );
};