import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { string, func, shape } from "prop-types";
import { setSearchTerm } from "./actionCreators";

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });
const mapDispatchToProps = { onSearchTermChange: setSearchTerm };

const Landing = ({ searchTerm, onSearchTermChange, history }) => (
  <div className="landing">
    <h1>Vid App</h1>
    <form onSubmit={() => history.push("/search")}>
      <input
        type="search"
        value={searchTerm}
        placeholder="Search"
        onChange={({ target: { value } }) => onSearchTermChange(value)}
      />
    </form>
    <Link to="/search"> or browse all... </Link>
  </div>
);


// props stuff
Landing.propTypes = {
  searchTerm: string,
  onSearchTermChange: func.isRequired,
  history: shape({})
};

Landing.defaultProps = {
  searchTerm: "",
  history: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
