import styled, { css } from 'styled-components';

const InputFeedback = styled.span`
  font-size: 0.8rem;

  ${props =>
    props.error &&
    css`
      color: red;
    `};
`;

export default InputFeedback;
