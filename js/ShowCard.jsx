import React from 'react';
import PropTypes from 'prop-types';

const ShowCard = ({ show }) => (
  <div className="show-card">
    <img
      alt={`${show.title} show poster`}
      src={`/public/img/posters/${show.poster}`}
    />
    <div>
      <h3>{show.title}</h3>
      <h4>({show.year})</h4>
      <p>{show.description}</p>
    </div>
  </div>
);

ShowCard.propTypes = {
  show: PropTypes.object
}


export default ShowCard;
