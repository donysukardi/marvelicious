import React from 'react';
import { Redirect } from 'react-router-dom';
import withAuth from '../stateContainers/withAuth';

const IndexPage = ({ auth }) =>
  auth.state.isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <Redirect to="/login" />
  );

export default withAuth(IndexPage);
