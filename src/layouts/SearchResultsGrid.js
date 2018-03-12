import styled from 'styled-components';

const SearchResultsGrid = styled.section`
  display: grid;
  padding: 1.5rem 0;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default SearchResultsGrid;
