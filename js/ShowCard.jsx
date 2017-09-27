import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SHOW, DEFAULT_SHOW} from './TYPES';


const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends React.Component {

  shouldComponentUpdate() {
    return false; // this is a dump component, once it's rendered, it doesn't get updated -- thus no need to re-render it again. EVER.
  }

  render() {
    const { show } = this.props

    return (
      <Wrapper className='show-card' to={`/details/${show.imdbID}`}>
        <Image
          alt={`${show.title} - show poster`}
          src={`/public/img/posters/${show.poster}`}
        />
        <div>
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </Wrapper>
    );
  }
}

ShowCard.defaultProps = {
  show: DEFAULT_SHOW
};

ShowCard.propTypes = {
  show: SHOW.isRequired
};

export default ShowCard;
