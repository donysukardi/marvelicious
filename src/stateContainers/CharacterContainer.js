import { Container } from 'unstated';
const API_KEY = '4abf9df9d2d386aa3b211a8640c40eef';
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/characters';

export const statuses = {
  SEARCHING: 'searching',
  DONE: 'done',
};

const normalizeResults = results =>
  results.reduce(
    ([resultsList, resultsMap], x) => {
      resultsList.push(x.id);
      resultsMap[x.id] = x;
      return [resultsList, resultsMap];
    },
    [[], {}]
  );

class CharacterContainer extends Container {
  state = {
    search: '',
    page: 1,
    pageSize: 18,
    charactersMap: {},
    currentList: [],
    totalPages: 1,
    status: null,
  };

  async search(data) {
    this.setState({
      status: statuses.SEARCHING,
    });

    const { search, pageSize = this.state.pageSize } = data;
    const page = data.page ? parseInt(data.page, 10) : 1;
    const offset = (page - 1) * pageSize;

    const res = await fetch(
      `${BASE_URL}?nameStartsWith=${search}&limit=${pageSize}&offset=${offset}&apikey=${API_KEY}`
    );
    const json = await res.json();
    const { total, results } = json.data;

    const totalPages = Math.ceil(total / pageSize);
    const [currentList, charactersMap] = normalizeResults(results);

    this.setState({
      page,
      pageSize,
      totalPages,
      currentList,
      charactersMap: { ...this.state.charactersMap, ...charactersMap },
      status: statuses.DONE,
    });
  }

  async fetchCharacter(id) {
    const res = await fetch(`${BASE_URL}/${id}?apikey=${API_KEY}`);
    const json = await res.json();
    if (json.code === 200) {
      const { total, results } = json.data;
      if (total === 1) {
        this.setState({
          charactersMap: {
            ...this.state.charactersMap,
            [id]: results[0],
          },
        });
      }
    } else {
      throw json;
    }
  }
}

export default CharacterContainer;
