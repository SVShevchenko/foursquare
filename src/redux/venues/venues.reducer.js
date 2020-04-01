import * as types from './venues.types';

const initialState = {
  venues: null,
  isLoading: false,
  error: ''
};

const venues = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS_VENUES:
      return {
        ...state,
        venues: action.payload.venues,
        isLoading: false
      };
    default:
      return state;
  }
};

export default venues;
