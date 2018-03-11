import React, { Component } from 'react';
import { withProps } from 'recompose';
import styled from 'styled-components';
import BaseButton from './Button';

const Button = withProps({ primary: true, wide: true })(BaseButton);

const Wrapper = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  padding: 0 1rem;
  border-radius: 2px;
  border: none;
  height: 2.5rem;
  flex: 1;
  margin-right: 1.5rem;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
    };
  }

  onChange = e => {
    const value = e.target.value;
    this.setState({
      value,
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Wrapper>
          <SearchInput
            type="search"
            placeholder="Enter Marvel character name"
            name="search"
            onChange={this.onChange}
            value={value}
            aria-labelledby="searchbutton"
          />
          <Button id="searchbutton" disabled={!value || !value.length}>
            Search
          </Button>
        </Wrapper>
      </form>
    );
  }
}

export default SearchBar;
