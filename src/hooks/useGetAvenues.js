import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchVenues } from '../redux/venues/venues.actions';

export default function useGetAvenues(params) {
  const { venues,  isLoading, error } = useSelector(state => state.venues) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (params && !isLoading && !error) dispatch(fetchVenues(params));
  }, [dispatch, error, isLoading, params]);

  return [venues, isLoading, error];
}