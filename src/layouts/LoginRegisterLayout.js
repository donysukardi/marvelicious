import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { headingFont } from '../styles/variables';

const Layout = styled.div`
  background-image: url('/images/bg.gif');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
`;

const FormSection = styled.section`
  margin: 4rem auto 0;
`;

const FormWrapper = styled.div`
  padding: 2rem;
  background-color: #333;
  border-radius: 4px;
  width: 400px;
  margin-top: 1.5rem;
`;

const Heading = styled.h1`
  font-family: ${headingFont};
  font-size: 4.8rem;
  color: #f11e22;
  text-align: center;
  margin: 0;
`;

const FormHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  color: #888;
  text-align: center;
  margin: 0;
`;

const FormFooter = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #888;
`;
const LoginRegisterLayout = ({ heading, formHeading, body, footer }) => (
  <Layout>
    <FormSection>
      <Heading>{heading}</Heading>
      <FormHeading>{formHeading}</FormHeading>
      <FormWrapper>{body}</FormWrapper>
      <FormFooter>{footer}</FormFooter>
    </FormSection>
  </Layout>
);

LoginRegisterLayout.propTypes = {
  heading: PropTypes.node.isRequired,
  formHeading: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
};

export default LoginRegisterLayout;
