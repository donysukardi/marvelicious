import React from 'react';
import { Subscribe } from 'unstated';
import { setDisplayName, wrapDisplayName } from 'recompose';
import CharacterContainer from './CharacterContainer';

function withCharacters(WrappedComponent) {
  const WithCharacters = props => (
    <Subscribe to={[CharacterContainer]}>
      {characters => <WrappedComponent {...props} characters={characters} />}
    </Subscribe>
  );
  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(WrappedComponent, 'withCharacters'))(
      WithCharacters
    );
  }
  return WithCharacters;
}

export default withCharacters;
