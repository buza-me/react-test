import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import IndexPage from './pages/IndexPage/IndexPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
