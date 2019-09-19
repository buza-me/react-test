import React from 'react';
import Input from '../Input/Input';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import './AddRecordCard.css';

export default function AddRecordCard({
  title,
  password,
  titleInputHandler,
  passwordInputHandler,
  onSubmitHandler,
  onCloseHandler
}) {
  return (
    <div className="add-record-card-wrapper" onClick={onCloseHandler}>
      <form
        className="add-record-card-component"
        onSubmit={event => event.preventDefault()}
        onClick={event => event.stopPropagation()}
      >
        <div className="add-record-card-component__input-wrapper">
          <label for="title-input">title:</label>
          <Input
            onChange={titleInputHandler}
            value={title}
            type="text"
            name="title-input"
          />
        </div>
        <div className="add-record-card-component__input-wrapper">
          <label for="password-input">password:</label>
          <Input
            onChange={passwordInputHandler}
            value={password}
            type="text"
            name="password-input"
          />
        </div>
        <Button
          onClick={onSubmitHandler}
          className="add-record-card-component__submit-button"
        >
          save
        </Button>
        <Icon className="grey add-record-card-component__close-icon" onClick={onCloseHandler} tooltip="close">
          <i className="fas fa-times" />
        </Icon>
      </form>
    </div>
  );
};