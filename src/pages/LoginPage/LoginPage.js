import React from 'react';
import { Link } from 'react-router-dom';
import LoginChecker from '../../containers/LoginChecker/LoginChecker';
import LoginForm from '../../containers/LoginForm/LoginForm';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './LoginPage.css';

export default function LoginPage({ location }) {
  return (
    <div className="login-page">
      <LoginChecker location={location} />
      <Header title="Login">
        <Button>
          <Link to="/registration">sign up</Link>
        </Button>
      </Header>
      <div className="login-page__login-form-wrapper">
        <LoginForm />
      </div>
    </div>
  )
}