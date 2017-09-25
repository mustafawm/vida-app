import { SET_SEARCH_TERM } from './actions';

const INIT_STATE = {
  searchTerm: ""
};


const rootReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: payload };

    default:
      return state;
  }
};

export default rootReducer;
