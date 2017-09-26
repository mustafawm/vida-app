import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import ShowCard from './ShowCard';
import { SHOWS, DEFAULT_SHOWS } from './TYPES';

const mapStateToProps = ({ searchTerm }) => ({ searchTerm })

function filteredShows(shows, searchTerm) {
  return shows.filter( show =>
    `${show.title} ${show.description}`.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
}

const Search = ({ shows, searchTerm }) => (
  <div className="search">
    <Header showSearch />
    <div>
      { filteredShows(shows, searchTerm).map(show => <ShowCard show={show} key={show.imdbID} /> )}
    </div>
  </div>
);


// props stuff
Search.propTypes = {
  shows: SHOWS,
  searchTerm: string
};

Search.defaultProps = {
  shows: DEFAULT_SHOWS,
  searchTerm: ''
};

export default connect(mapStateToProps)(Search);
