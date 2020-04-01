import * as types from "./menu.types";
import { foursquare } from "../../constants";

export const fetchMenu = venueId => dispatch => {
  dispatch({
    type: types.FETCH_REQUEST_MENU,
    payload: {
      isLoading: true
    }
  });
  foursquare.venues
    .getVenueMenu(venueId)
    .then(res => {
      dispatch({
        type: types.FETCH_SUCCESS_MENU,
        payload: {
          isLoading: false,
          menu: res.response.menu
        }
      });
    })
    .catch(error => {
      dispatch({
        type: types.FETCH_ERROR_MENU,
        payload: {
          isLoading: false,
          error
        }
      });
    });
};
