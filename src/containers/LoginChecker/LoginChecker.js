import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmail } from '../../store/actions/actions';

function LoginChecker({ setEmail, email, location }) {

  const isLoggedIn = email => !!email;
  const writeEmailToLocalStorage = email => localStorage.setItem('email', email);
  const localStorageEmail = localStorage.getItem('email');

  !isLoggedIn(email) &&
  isLoggedIn(localStorageEmail) &&
  setEmail(localStorageEmail);

  isLoggedIn(email) &&
  !isLoggedIn(localStorageEmail) &&
  writeEmailToLocalStorage(email);

  return (
    <Fragment>
      {( isLoggedIn(email) || isLoggedIn(localStorageEmail) ) && location.pathname !== "/" ? <Redirect to="/" /> : null}
      {( !isLoggedIn(email) && !isLoggedIn(localStorageEmail) ) && location.pathname !== "/login" ? <Redirect to="/login" /> : null}
    </Fragment>
  );
};

function mapStateToProps({ sharedReducer }) {
  return {
    email: sharedReducer.email,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setEmail: email => dispatch(setEmail(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginChecker);