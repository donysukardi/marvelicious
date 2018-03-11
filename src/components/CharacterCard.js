import React from 'react';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';
import styled, { css } from 'styled-components';
import BaseLink from './Link';
import { headingFont } from '../styles/variables';

const NO_IMAGE = 'image_not_available.jpg';

const Link = withProps({ plain: true, silent: true })(BaseLink);

const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
`;

const AvatarWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
`;

const Avatar = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  ${props =>
    props.noImg &&
    css`
      object-position: left bottom;
    `};
`;

const CharacterName = styled.h3`
  color: white;
  font-family: ${headingFont};
  font-size: 2.4rem;
  text-decoration: none;
  margin: 0;
  background-color: #222;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 1rem;
`;

const CharacterCard = ({ onClick, href, name, imgUrl }) => (
  <Card>
    <Link to={href} onClick={onClick}>
      {imgUrl && (
        <AvatarWrapper>
          <Avatar noImg={imgUrl.endsWith(NO_IMAGE)} src={imgUrl} alt={name} />
        </AvatarWrapper>
      )}
      <CharacterName title={name}>{name}</CharacterName>
    </Link>
  </Card>
);

CharacterCard.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
};

export default CharacterCard;
