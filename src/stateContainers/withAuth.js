import React from 'react';
import { Subscribe } from 'unstated';
import { setDisplayName, wrapDisplayName } from 'recompose';
import AuthContainer from './AuthContainer';

function withAuth(WrappedComponent) {
  const WithAuth = props => (
    <Subscribe to={[AuthContainer]}>
      {auth => <WrappedComponent {...props} auth={auth} />}
    </Subscribe>
  );
  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(WrappedComponent, 'withAuth'))(
      WithAuth
    );
  }
  return WithAuth;
}

export default withAuth;
