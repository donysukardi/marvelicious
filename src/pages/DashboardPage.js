import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import queryString from 'query-string';
import {
  Header,
  SearchBar,
  CharacterCard,
  EmptyBox,
  Link,
  Loader,
  ResultsNav,
  TextWrapper,
  WidthWrapper,
} from '../components';
import CharacterPage from './CharacterPage';
import SearchLayout from '../layouts/SearchLayout';
import SearchResultsGrid from '../layouts/SearchResultsGrid';
import { statuses } from '../stateContainers/CharacterContainer';
import withCharacters from '../stateContainers/withCharacters';
import { logout } from '../libs/firebaseUtils';

const toUrl = (pathname, queryParams) =>
  `${pathname}?${queryString.stringify(queryParams)}`;

class DashboardPage extends Component {
  async componentDidMount() {
    const { history, location } = this.props;

    if (location.state) {
      const { isAlreadyAuthenticated } = location.state || {};
      if (isAlreadyAuthenticated) {
        alert('You have already been authenticated');
      }

      // Flush out any state passed through history
      history.replace({
        pathname: '.',
        state: {},
      });
    } else {
      const searchStr = this.props.location.search;
      const queryParams = queryString.parse(searchStr);
      const { page, search } = queryParams || {};
      if (search) {
        this.props.characters.search({ page, search });
      }
    }
  }

  async componentDidUpdate(prevProps) {
    const searchStr = this.props.location.search;
    if (prevProps.location.search !== searchStr) {
      const queryParams = queryString.parse(searchStr);
      const prevQueryParams = queryString.parse(prevProps.location.search);
      const { page: prevPage, search: prevSearch } = prevQueryParams || {};
      const { page, search } = queryParams || {};
      if (page !== prevPage || search !== prevSearch) {
        await this.props.characters.search({ page, search });
      }
    }
  }

  render() {
    const { location, history, characters } = this.props;
    const { pathname } = location;
    const queryParams = queryString.parse(location.search);
    const { view, search } = queryParams || {};
    const page = queryParams.page ? parseInt(queryParams.page, 10) : 1;

    const { charactersMap, currentList, totalPages, status } = characters.state;

    const hasSearch = search && !!search.length;
    const isEmptyState = !hasSearch;
    const searchDone = search && status === statuses.DONE;
    const isSearching = search && status === statuses.SEARCHING;
    const hasNoResults = searchDone && !currentList.length;
    const hasResults = searchDone && !!currentList.length;

    return (
      <SearchLayout>
        <WidthWrapper>
          <Header onLogout={logout} />

          <SearchBar
            value={search}
            onSubmit={value => {
              history.push(toUrl(pathname, { search: value }));
            }}
          />

          {isEmptyState && (
            <EmptyBox>
              <TextWrapper center>
                <p>
                  Type a character name onto the Search Bar above and click
                  'Search'.
                </p>
                <p>
                  Or try{' '}
                  <Link silent to={'?search=Iron+Man'}>
                    Iron Man
                  </Link>{' '}
                  or{' '}
                  <Link silent to={'?search=Captain+America'}>
                    Captain America
                  </Link>.
                </p>
              </TextWrapper>
            </EmptyBox>
          )}

          {isSearching && (
            <EmptyBox>
              <Loader />
            </EmptyBox>
          )}

          {hasNoResults && (
            <EmptyBox>
              <TextWrapper center>
                <p>No results found for {search}</p>
                <p>
                  Try{' '}
                  <Link silent to={'?search=Black+Panther'}>
                    Black Panther
                  </Link>{' '}
                  or{' '}
                  <Link silent to={'?search=Captain+Marvel'}>
                    Captain Marvel
                  </Link>.
                </p>
              </TextWrapper>
            </EmptyBox>
          )}

          {hasResults && (
            <SearchResultsGrid>
              {currentList.map(id => {
                const { name, thumbnail } = charactersMap[id];
                return (
                  <CharacterCard
                    key={id}
                    onClick={e => {
                      e.preventDefault();
                      history.push(
                        toUrl(pathname, { ...queryParams, view: id })
                      );
                    }}
                    href={toUrl(pathname, { view: id })}
                    name={name}
                    imgUrl={
                      thumbnail && `${thumbnail.path}.${thumbnail.extension}`
                    }
                  />
                );
              })}
            </SearchResultsGrid>
          )}

          {searchDone && (
            <ResultsNav
              prev={
                page > 1 && toUrl(pathname, { ...queryParams, page: page - 1 })
              }
              next={
                page < totalPages &&
                toUrl(pathname, { ...queryParams, page: page + 1 })
              }
            />
          )}
        </WidthWrapper>

        {view && <CharacterPage id={view} />}
      </SearchLayout>
    );
  }
}

const enhance = compose(withRouter, withCharacters);

export default enhance(DashboardPage);
