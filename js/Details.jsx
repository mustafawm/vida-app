import React from "react";
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import Header from "./Header";
import Spinner from "./Spinner";
import { SHOW, DEFAULT_SHOW } from "./TYPES";
import { getShowDetails } from './actionCreators';

const mapStateToProps = ({ apiData }, ownProps) => {
  const data = apiData[ownProps.show.imdbID] || {};
  return { rating: data.rating || '' };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getShowDetails() {
    return dispatch(getShowDetails(ownProps.show.imdbID));
  }
});

class Details extends React.Component {

  componentDidMount() {
    if (!this.props.show.rating) {
      this.props.getShowDetails();
    }
  }

  render() {
    const { rating } = this.props;
    const { title, description, year, poster, trailer } = this.props.show;

    const ratingComponent = rating ? <h3>{rating}</h3> : <Spinner />;

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          {ratingComponent}
          <img
            alt={`poster for ${title}`}
            src={`/public/img/posters/${poster}`}
          />
          <p> {description} </p>
        </section>
        <div>
          <iframe
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          />
        </div>
      </div>
    );
  }
}


// props stuff
Details.defaultProps = {
  show: DEFAULT_SHOW,
  rating: ''
};

Details.propTypes = {
  show: SHOW.isRequired,
  rating: string,
  getShowDetails: func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
