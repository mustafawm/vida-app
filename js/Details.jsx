import React from "react";
import axios from "axios";
import Header from "./Header";
import Spinner from "./Spinner";
import { SHOW, DEFAULT_SHOW } from "./TYPES";

class Details extends React.Component {
  state = {
    apiData: { rating: "" }
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then( ({ data: { rating } }) => {
        this.setState({ apiData: { rating } });
      })
  }


  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    const { apiData: { rating } } = this.state;

    const ratingComponent = rating ? <h3>{rating}</h3> : <Spinner />

    return (
      <div className="details">
        <Header />
        {/* <pre><code>{JSON.stringify(props, null, 4)}</code></pre> */}
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

Details.defaultProps = {
  show: DEFAULT_SHOW
};

Details.propTypes = {
  show: SHOW.isRequired
};

export default Details;
