import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

export default class Search extends React.Component {
  state = {
    searchTerm: ''
  };

  onSearchTermChange = ({ target: { value } }) => this.setState({ searchTerm: value });

  filteredShows = () =>
    preload.shows.filter(show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .indexOf(this.state.searchTerm.toLowerCase()) !== -1
    );

  render() {
    return (
      <div className="search">
        <header>
          <h1>VidApp</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.onSearchTermChange}
            placeholder="Search..."
          />
        </header>
        {/* <pre><code>{JSON.stringify(preload, null, 4)}</code></pre> */}
        <div>
          {this.filteredShows().map(show => <ShowCard show={show} key={show.imdbID} />)}
        </div>
      </div>
    );
  }
}
