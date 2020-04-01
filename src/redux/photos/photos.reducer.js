import * as types from './photos.types';

const initialState = {
  photos: null,
  isLoading: false,
  error: ''
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SUCCESS_PHOTOS:
      return {
        ...state,
        photos: action.payload.photos,
        isLoading: false
      };
    default:
      return state;
  }
};

export default photos;
