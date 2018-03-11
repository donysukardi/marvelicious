import styled from 'styled-components';

const SearchResultsGrid = styled.section`
  display: grid;
  padding: 1.5rem 0;
  @media (min-width: 520px) {
    grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
    grid-gap: 1.5rem;
  }
`;

export default SearchResultsGrid;
