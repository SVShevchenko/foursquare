import * as types from "./venues.types";
import { foursquare } from "../../constants";

export const fetchVenues = params => dispatch => {
  dispatch({
    type: types.FETCH_REQUEST_VENUES,
    payload: {
      isLoading: true
    }
  });
  foursquare.venues
    .getVenues(params)
    .then(res => {
      dispatch({
        type: types.FETCH_SUCCESS_VENUES,
        payload: {
          isLoading: false,
          venues: res.response.venues
        }
      });
    })
    .catch(error => {
      dispatch({
        type: types.FETCH_ERROR_VENUES,
        payload: {
          isLoading: false,
          error
        }
      });
    });
};
