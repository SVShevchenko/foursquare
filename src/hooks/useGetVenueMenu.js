import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchMenu } from '../redux/menu/menu.actions';

export default function useGetAvenueMenu(venueId) {
  const { menu,  isLoading, error } = useSelector(state => state.menu) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (venueId && !isLoading && !error) dispatch(fetchMenu(venueId));
  }, [dispatch, error, isLoading, venueId]);

  return [menu, isLoading, error];
}