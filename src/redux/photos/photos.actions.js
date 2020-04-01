import * as types from "./photos.types";
import { foursquare } from "../../constants";

export const fetchPhotos = venueId => dispatch => {
  dispatch({
    type: types.FETCH_REQUEST_PHOTOS,
    payload: {
      isLoading: true
    }
  });
  foursquare.venues
    .getVenuePhotos(venueId)
    .then(res => {
      dispatch({
        type: types.FETCH_SUCCESS_PHOTOS,
        payload: {
          isLoading: false,
          photos: res.response.photos
        }
      });
    })
    .catch(error => {
      dispatch({
        type: types.FETCH_ERROR_PHOTOS,
        payload: {
          isLoading: false,
          error
        }
      });
    });
};
