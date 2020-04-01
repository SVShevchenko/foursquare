import * as types from './venue.types';

const initialState = {
  venue: null,
  isLoading: false,
  error: ''
};

const venue = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS_VENUE:
      return {
        ...state,
        venue: action.payload.venue,
        isLoading: false
      };
    default:
      return state;
  }
};

export default venue;
