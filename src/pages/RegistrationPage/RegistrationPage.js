import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../containers/SignUpForm/SignUpForm';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import './RegistrationPage.css'

export default function RegistrationPage() {
  return (
    <div className="registration-page">
      <Header title="Sign up">
        <Button>
          <Link to="/login">login</Link>
        </Button>
      </Header>
      <div className="registration-page__signup-form-wrapper">
        <SignUpForm />
      </div>
    </div>
  )
}