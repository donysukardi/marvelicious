import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { omitProps } from '../libs/utils';

const BaseLink = omitProps(['silent', 'plain'])(RouterLink);

const Link = styled(BaseLink)`
  border: none;
  background-color: transparent;
  padding: 0;
  color: #222;

  ${props =>
    props.silent &&
    css`
      color: inherit;
    `} ${props =>
    props.plain &&
    css`
      text-decoration: none;
    `};
`;

export default Link;
