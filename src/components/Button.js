import styled, { css } from 'styled-components';

const Button = styled.button`
  position: relative;
  padding: 0 1rem;
  margin: 0 1em;
  border: none;
  background-color: #444;
  color: white;
  height: 2.5rem;
  line-height: 2.5rem;
  text-decoration: none;
  display: inline-block;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    width: 11px;
    transform: skew(-11deg, 0deg);
    background-color: #444;
  }

  &:before {
    right: 100%;
    margin-right: -5px;
  }

  &:after {
    left: 100%;
    margin-left: -5px;
  }

  ${props =>
    props.primary &&
    css`
      background-color: #f0141e;
      &:before,
      &:after {
        background: #f0141e;
      }
    `}

  ${props =>
    props.block &&
    css`
      width: calc(100% - 2em);
    `}

  ${props =>
    props.disabled &&
    css`
      background-color: #aaa;
      &:before,
      &:after {
        background: #aaa;
      }
    `}

  ${props =>
    props.wide &&
    css`
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    `}
`;

export default Button;
