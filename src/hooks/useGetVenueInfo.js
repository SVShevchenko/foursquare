import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchVenue } from '../redux/venue/venue.actions';

export default function useGetAvenueInfo(venueId) {
  const { venue,  isLoading, error } = useSelector(state => state.venue) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (venueId && !isLoading && !error) dispatch(fetchVenue(venueId));
  }, [dispatch, error, isLoading, venueId]);

  return [venue, isLoading, error];
}