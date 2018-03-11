import styled, { css } from 'styled-components';

const TextInput = styled.input`
  background-color: white;
  padding: .5rem;
  border: 2px solid #ddd;
  border-radius: 4px;

  ${props =>
    props.block &&
    css`
      width: 100%;
    `}

  ${props =>
    props.dark &&
    css`
      border-color: white;
    `}

  ${props =>
    props.error &&
    css`
      border-color: #ff2c2c;
    `}
`;

export default TextInput;
