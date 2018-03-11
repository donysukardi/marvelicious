import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import { Route, Redirect } from 'react-router';
import AuthContainer from '../stateContainers/AuthContainer';

class UnauthenticatedOnlyComponent extends Component {
  // This is currently required as successful authentication will always rerender this route, which is not what we want
  shouldComponentUpdate(nextProps) {
    if (!this.props.isAuthenticated && nextProps.isAuthenticated) {
      return false;
    }
    return true;
  }

  render() {
    const {
      component: RenderComponent,
      isAuthenticated,
      redirectTo = '/dashboard',
      ...props
    } = this.props;
    return isAuthenticated ? (
      <Redirect
        to={{
          pathname: redirectTo,
          state: { isAlreadyAuthenticated: true },
        }}
      />
    ) : (
      <RenderComponent {...props} />
    );
  }
}

const UnauthenticatedOnlyRoute = ({ component, ...rest }) => (
  <Subscribe to={[AuthContainer]}>
    {auth => (
      <Route
        {...rest}
        render={props => (
          <UnauthenticatedOnlyComponent
            isAuthenticated={auth.state.isAuthenticated}
            component={component}
            {...props}
          />
        )}
      />
    )}
  </Subscribe>
);

export default UnauthenticatedOnlyRoute;
