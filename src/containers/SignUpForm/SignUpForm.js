import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './SignUpForm.css';

export default function LoginForm() {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [registrationIsSuccesful, setRegistrationIsSuccesful] = useState(false);

  const handleEmailInput = ({ target: { value } }) => {
    setEmailInputValue(value);
  }
  const handlePasswordInput = ({ target }) => {
    setPasswordInputValue(target.value);
  }
  const clearInput = () => {
    setEmailInputValue('');
    setPasswordInputValue('');
  }
  const handleSubmit = event => {
    event.preventDefault();
    const registeredUser = JSON.stringify({
      email: emailInputValue,
      password: passwordInputValue
    });
    localStorage.setItem('registeredUser', registeredUser);
    setRegistrationIsSuccesful(true);
    clearInput();
  }

  return (
    <form onSubmit={handleSubmit} className="signup-form-component">
      <div className={`signup-form-component__content-wrapper ${registrationIsSuccesful ? 'hidden' : null}`}>
        <div className="signup-form-component__input-wrapper">
          <label htmlFor="email-input">email:</label>
          <Input
            onChange={handleEmailInput}
            value={emailInputValue}
            type="email"
            name="email-input"
          />
        </div>
        <div className="signup-form-component__input-wrapper">
          <label htmlFor="password-input">password:</label>
          <Input
            onChange={handlePasswordInput}
            value={passwordInputValue}
            type="password"
            name="password-input"
          />
        </div>
        <Button className="signup-form-component__submit-button">sign up</Button>
      </div>
      <h1 className={`signup-form-component__success-message ${!registrationIsSuccesful ? 'hidden' : null}`}>
       Success! <Link to="/login">Log in!</Link>
      </h1>
    </form>
  );
};