import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.nav`
  display: flex;
  padding: 4rem 0;
  justify-content: center;
`;

const Link = Button.withComponent(RouterLink);

const ResultsNav = ({ prev, next }) => (
  <Wrapper>
    {prev && <Link to={prev}>Previous</Link>}
    {next && <Link to={next}>Next</Link>}
  </Wrapper>
);

export default ResultsNav;
