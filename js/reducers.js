import { combineReducers } from "redux";
import { SET_SEARCH_TERM, SET_API_DATA } from "./actions";

// single reducer
const apiData = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_API_DATA:
      return {
        ...state,
        [payload.imdbID]: payload
      };

    default:
      return state;
  }
};

// single reducer
const searchTerm = (state = "", { type, payload }) => {
  switch (type) {
    case SET_SEARCH_TERM:
      return payload;

    default:
      return state;
  }
};

const rootReducer = combineReducers({ apiData, searchTerm });

export default rootReducer;
