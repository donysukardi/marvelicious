import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5rem 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  border-radius: 4px;
  min-height: 280px;
  color: white;
`;

const EmptyBox = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

EmptyBox.propTypes = {
  children: PropTypes.node,
};

export default EmptyBox;
