import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UnauthenticatedOnlyRoute from './UnauthenticatedOnlyRoute';
import PrivateRoute from './PrivateRoute';
import IndexPage from '../pages/IndexPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import DashboardPage from '../pages/DashboardPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <UnauthenticatedOnlyRoute path="/login" component={LoginPage} />
      <UnauthenticatedOnlyRoute path="/register" component={RegistrationPage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
      <Route exact path="/" component={IndexPage} />
    </Switch>
  </Router>
);

export default AppRouter;
