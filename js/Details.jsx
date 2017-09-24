import React from 'react';
import Header from './Header';
import { SHOW, DEFAULT_SHOW } from './TYPES';

const Details = props => {
  const { title, description, year, poster, trailer } = props.show;

  return (
    <div className="details">
      <Header />
      <pre><code>{JSON.stringify(props, null, 4)}</code></pre>
      <section>
        <h1>{title}</h1>
        <h2>{year}</h2>
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



Details.defaultProps = {
  show: DEFAULT_SHOW
};

Details.propTypes = {
  show: SHOW.isRequired
};

export default Details;
