import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setEmail } from '../../store/actions/actions';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import './LoginForm.css';

function LoginForm({ setEmail }) {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleEmailInput = ({ target: { value } }) => {
    setEmailInputValue(value);
  }
  const handlePasswordInput = ({ target: { value } }) => {
    setPasswordInputValue(value);
  }
  const clearInput = () => {
    setEmailInputValue('');
    setPasswordInputValue('');
  }
  const handleSubmit = event => {
    event.preventDefault();
    const registeredUser = localStorage.getItem('registeredUser') && JSON.parse(localStorage.getItem('registeredUser')) || {};
    if (emailInputValue !== registeredUser.email ||
      passwordInputValue !== registeredUser.password) {
        setHasError(true);
        clearInput();
        setTimeout(() => setHasError(false), 3000);
    } else {
      localStorage.setItem('email', emailInputValue);
      setEmail(emailInputValue);
      clearInput();
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`login-form-component ${hasError ? 'error' : null}`}>
      <div className="login-form-component__input-wrapper">
        <label htmlFor="email-input">email:</label>
        <Input
          onChange={handleEmailInput}
          value={emailInputValue}
          type="email"
          name="email-input"
        />
      </div>
      <div className="login-form-component__input-wrapper">
        <label htmlFor="password-input">password:</label>
        <Input
          onChange={handlePasswordInput}
          value={passwordInputValue}
          type="password"
          name="password-input"
        />
      </div>
      <Button className="login-form-component__submit-button">log in</Button>
      <span className="login-form-component__error-message">wrong input</span>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setEmail: email => dispatch(setEmail(email)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);