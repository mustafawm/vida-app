import axios from 'axios';
import { SET_API_DATA, SET_SEARCH_TERM } from './actions';

export function setApiData(data) {
  return { type: SET_API_DATA, payload: data };
}

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function getShowDetails(imdbID) {
  return dispatch => {
    axios.get(`http://localhost:3000/${imdbID}`)
      .then( ({ data }) => {
        dispatch(setApiData(data));
      })
      .catch( err => console.error('ajax error: ', err)); // eslint-disable-line
  }
}
