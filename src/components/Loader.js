import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 2.4rem;
`;

const Loader = () => (
  <Rotate>
    <span role="img" aria-label="Spiral Loader">
      🌀
    </span>
  </Rotate>
);

export default Loader;
