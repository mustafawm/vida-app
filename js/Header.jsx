import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool, func, string } from 'prop-types';
import { setSearchTerm } from './actionCreators';

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });
const mapDispatchToProps = dispatch => ({
  onSearchTermChange(value) {
    dispatch(setSearchTerm(value));
  }
});

const Header = ({ showSearch, searchTerm, onSearchTermChange }) => (
  <header>
    <h1> <Link to="/"> VidApp </Link> </h1>
    { showSearch ?
      <input
        placeholder="Search"
        value={searchTerm}
        onChange={({ target: { value } }) => onSearchTermChange(value)}
      />
    : <h2> <Link to="/search"> Back to Search</Link> </h2> }
  </header>
);


// props stuff
Header.defaultProps = {
  showSearch: false,
  searchTerm: ''
};

Header.propTypes = {
  showSearch: bool,
  searchTerm: string,
  onSearchTermChange: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
