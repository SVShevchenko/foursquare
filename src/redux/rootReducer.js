import { combineReducers } from 'redux';
import menuReducer from './menu/menu.reducer';
import photosReducer from './photos/photos.reducer';
import venueReducer from './venue/venue.reducer';
import venuesReducer from './venues/venues.reducer';

export default combineReducers({
  menu: menuReducer,
  photos: photosReducer,
  venue: venueReducer,
  venues: venuesReducer,
});
