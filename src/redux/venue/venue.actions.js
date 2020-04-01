import * as types from "./venue.types";
import { foursquare } from "../../constants";

export const fetchVenue = venueId => dispatch => {
  dispatch({
    type: types.FETCH_REQUEST_VENUE,
    payload: {
      isLoading: true
    }
  });
  foursquare.venues
    .getVenue(venueId)
    .then(res => {
      dispatch({
        type: types.FETCH_SUCCESS_VENUE,
        payload: {
          isLoading: false,
          venue: res.response.venue
        }
      });
    })
    .catch(error => {
      dispatch({
        type: types.FETCH_ERROR_VENUE,
        payload: {
          isLoading: false,
          error
        }
      });
    });
};
