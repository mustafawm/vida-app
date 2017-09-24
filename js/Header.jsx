import React from 'react';
import { Link } from 'react-router-dom';
import { bool, func, string } from 'prop-types';

const Header = props => (
  <header>
    <h1>
      <Link to="/"> VidApp </Link>
    </h1>
    { props.showSearch ?
      <input
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
      />
    : <h2> <Link to="/search"> Back to Search</Link> </h2> }
  </header>
);

Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: () => {},
  searchTerm: ''
};

Header.propTypes = {
  showSearch: bool,
  handleSearchTermChange: func,
  searchTerm: string
}

export default Header;
