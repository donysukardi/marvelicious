import React from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { withFormik } from 'formik';
import { withProps } from 'recompose';
import BaseTextInput from './TextInput';
import BaseButton from './Button';
import InputFeedback from './InputFeedback';

const InputWrapper = styled.div`
  & + & {
    margin-top: 0.5rem;
  }
`;

const TextInput = withProps({ block: true, dark: true })(BaseTextInput);

const Label = styled.label`
  color: #eee;
`;

const LabelText = styled.span`
  display: block;
  line-height: 1.5;
`;

const Button = withProps({ block: true, primary: true })(BaseButton);

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
`;

const LoginRegisterForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
  submitText,
}) => (
  <form onSubmit={handleSubmit}>
    <InputWrapper>
      <Label htmlFor="email" style={{ display: 'block' }}>
        <LabelText>Email</LabelText>
        <TextInput
          id="email"
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email}
        />
      </Label>
      {errors.email &&
        touched.email && <InputFeedback error>{errors.email}</InputFeedback>}
    </InputWrapper>

    <InputWrapper>
      <Label htmlFor="password" style={{ display: 'block' }}>
        <LabelText>Password</LabelText>
        <TextInput
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password && touched.password}
        />
      </Label>
      {errors.password &&
        touched.password && (
          <InputFeedback error>{errors.password}</InputFeedback>
        )}
    </InputWrapper>

    <ButtonWrapper>
      <Button type="submit" disabled={isSubmitting}>
        {submitText}
      </Button>
    </ButtonWrapper>
  </form>
);

const enhance = compose(
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validate: values => {
      let errors = {};
      ['email', 'password'].forEach(x => {
        if (!values[x] || !values[x].length) {
          errors[x] = 'Required';
        }
      });

      if (
        !errors.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },

    handleSubmit: (values, { props, ...actions }) => {
      props.onSubmit(values, actions);
    },

    displayName: 'LoginRegisterForm', // helps with React DevTools
  })
);

export default enhance(LoginRegisterForm);
