import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { headingFont } from '../styles/variables';
import { media } from '../styles/utils';

const typeTitleMap = {
  detail: 'Details',
  wiki: 'Wiki',
  comiclink: 'Comics',
};

const Wrapper = styled.div``;

const Avatar = styled.img`
  width: 480px;
  border-radius: 4px;
`;

const CharacterName = styled.h3`
  color: white;
  font-family: ${headingFont};
  font-size: 3.6rem;
  margin: 0;
  background-color: #222;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 1rem 0;

  ${media.tablet`
    font-size: 2.4rem;
  `};
`;

const UrlSection = styled.section`
  & + & {
    margin-top: 2.5rem;
  }
`;

const UrlType = styled.h3`
  text-transform: uppercase;
`;

const UrlLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const CharacterView = ({ name, imgUrl, urls = [] }) => (
  <Wrapper>
    {imgUrl && <Avatar src={imgUrl} alt={name} />}

    <CharacterName title={name}>{name}</CharacterName>

    {urls.map(({ type, url }) => {
      const typeTitle = typeTitleMap[type];
      // Only render recognizable URL types
      return (
        typeTitle && (
          <UrlSection key={type}>
            <UrlType>{typeTitle}</UrlType>
            <UrlLink href={url}>
              <span role="img" aria-label="Link Icon">
                🔗
              </span>{' '}
              Link
            </UrlLink>
          </UrlSection>
        )
      );
    })}
  </Wrapper>
);

CharacterView.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  urls: PropTypes.array,
};

export default CharacterView;
