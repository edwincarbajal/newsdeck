import React from 'react';
import SearchBar from '@opuscapita/react-searchbar';

export default class ReactView extends React.Component {
  render() {
    return (
      <SearchBar
        onSearch={this.handleSearch}
      />
    );
  }
}