import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link, LoginRegisterForm } from '../components';
import LoginRegisterLayout from '../layouts/LoginRegisterLayout';
import { register } from '../libs/firebaseUtils';

class RegistrationPage extends Component {
  onSubmit = async (values, actions) => {
    const { history } = this.props;
    try {
      await register(values);
      actions.setSubmitting(false);
      history.replace('/');
    } catch (error) {
      console.log(error);
      alert(JSON.stringify(error));
    }
  };

  render() {
    return (
      <LoginRegisterLayout
        heading="Marvelicious"
        formHeading="Sign Up"
        body={
          <LoginRegisterForm
            submitText="Create Account"
            onSubmit={this.onSubmit}
          />
        }
        footer={
          <Fragment>
            Already a member?{' '}
            <Link silent to="/login">
              Sign in here
            </Link>
          </Fragment>
        }
      />
    );
  }
}

RegistrationPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(RegistrationPage);
