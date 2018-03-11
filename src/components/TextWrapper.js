import styled, { css } from 'styled-components';

const TextWrapper = styled.div`
  ${props =>
    props.center &&
    css`
      text-align: center;
    `};
`;

export default TextWrapper;
