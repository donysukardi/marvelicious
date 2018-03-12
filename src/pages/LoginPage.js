import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link, LoginRegisterForm } from '../components';
import LoginRegisterLayout from '../layouts/LoginRegisterLayout';
import { login } from '../libs/firebaseUtils';

class LoginPage extends Component {
  onSubmit = async (values, actions) => {
    const { history } = this.props;
    actions.setSubmitting(true);

    try {
      await login(values);
      actions.setSubmitting(false);
      history.replace('/');
    } catch (error) {
      actions.setSubmitting(false);
      alert(error.message);
    }
  };

  render() {
    return (
      <LoginRegisterLayout
        heading="Marvelicious"
        formHeading="Sign In"
        body={
          <Fragment>
            <LoginRegisterForm submitText="Sign In" onSubmit={this.onSubmit} />
          </Fragment>
        }
        footer={
          <Fragment>
            Not a member?{' '}
            <Link silent to="/register">
              Sign up here
            </Link>
          </Fragment>
        }
      />
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(LoginPage);
