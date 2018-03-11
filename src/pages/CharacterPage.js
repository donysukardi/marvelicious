import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import queryString from 'query-string';
import { dissoc } from 'ramda';
import { CharacterView } from '../components';
import withCharacters from '../stateContainers/withCharacters';
import CharacterViewLayout from '../layouts/CharacterViewLayout';

const toUrl = (pathname, queryParams) =>
  `${pathname}?${queryString.stringify(queryParams)}`;

const getCharacter = props => {
  const { id, characters } = props;
  return characters.state.charactersMap[id];
};

class CharacterPage extends Component {
  componentDidMount() {
    const character = getCharacter(this.props);
    if (!character) {
      this.fetchCharacter(this.props.id);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const character = getCharacter(this.props);
      if (!character) {
        this.fetchCharacter(this.props.id);
      }
    }
  }

  fetchCharacter = async id => {
    try {
      await this.props.characters.fetchCharacter(id);
    } catch (error) {
      alert(error.status);
      this.onClose();
    }
  };

  onClose = () => {
    const { history, location } = this.props;
    const { pathname, search } = location;
    const queryParams = queryString.parse(search) || {};
    history.push(toUrl(pathname, dissoc('view', queryParams)));
  };

  render() {
    const { id, characters } = this.props;
    const { charactersMap } = characters.state;
    const character = charactersMap[id];
    const { name, thumbnail, urls } = character || {};

    return (
      <CharacterViewLayout onModalClose={this.onClose}>
        {character && (
          <CharacterView
            name={name}
            imgUrl={thumbnail && `${thumbnail.path}.${thumbnail.extension}`}
            urls={urls}
          />
        )}
      </CharacterViewLayout>
    );
  }
}

CharacterPage.propTypes = {
  id: PropTypes.string.isRequired,
  characters: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const enhance = compose(withRouter, withCharacters);

export default enhance(CharacterPage);
