import React from 'react';
import { SHOWS, DEFAULT_SHOWS } from './TYPES';
import Header from './Header';
import ShowCard from './ShowCard';

class Search extends React.Component {
  state = {
    searchTerm: ''
  };

  onSearchTermChange = ({ target: { value } }) => this.setState({ searchTerm: value });

  filteredShows = () =>
    this.props.shows.filter(
      show =>
        `${show.title} ${show.description}`
          .toLowerCase()
          .indexOf(this.state.searchTerm.toLowerCase()) !== -1
    );

  render() {
    return (
      <div className="search">
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.onSearchTermChange}
        />
        <div>
          {this.filteredShows().map(show =>
            <ShowCard show={show} key={show.imdbID} />
          )}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  shows: SHOWS
};

Search.defaultProps = {
  shows: DEFAULT_SHOWS
};

export default Search;
