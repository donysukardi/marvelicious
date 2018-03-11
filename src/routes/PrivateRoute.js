import React from 'react';
import { Subscribe } from 'unstated';
import { Route, Redirect } from 'react-router';
import AuthContainer from '../stateContainers/AuthContainer';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Subscribe to={[AuthContainer]}>
        {auth =>
          auth.state.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      </Subscribe>
    )}
  />
);

export default PrivateRoute;
