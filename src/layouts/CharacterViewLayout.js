import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, DrawerModal } from '../components';
import { media } from '../styles/utils';

const Wrapper = styled.section`
  background-color: #222;
  padding: 1.5rem;
  min-height: 100%;
  color: white;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

const CloseButton = Link.withComponent('button');
const CloseIcon = styled.span`
  font-size: 2rem;
  ${media.tablet`
    font-size: 1.5rem;
  `};
`;

const CharacterViewLayout = ({ onModalClose, children }) => (
  <DrawerModal contentLabel="Character View" onClose={onModalClose}>
    <Wrapper>
      <CloseButtonWrapper>
        <CloseButton title="Close" onClick={onModalClose}>
          <CloseIcon>
            <span role="img" aria-label="Close Icon">
              ❌
            </span>
          </CloseIcon>
        </CloseButton>
      </CloseButtonWrapper>
      {children}
    </Wrapper>
  </DrawerModal>
);

CharacterViewLayout.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default CharacterViewLayout;
