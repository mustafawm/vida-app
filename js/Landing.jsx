import React from "react";
import { string, func } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });
const mapDispatchToProps = { onSearchTermChange: setSearchTerm };

const Landing = ({ searchTerm, onSearchTermChange }) => (
  <div className="landing">
    <h1>Vid App</h1>
    <input
      value={searchTerm}
      placeholder="search"
      onChange={({ target: { value } }) => onSearchTermChange(value)}
    />
    <Link to="/search"> Or Browse All </Link>
  </div>
);

Landing.propTypes = {
  searchTerm: string.isRequired,
  onSearchTermChange: func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
