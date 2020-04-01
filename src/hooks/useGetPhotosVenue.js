import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchPhotos } from '../redux/photos/photos.actions';

export default function useGetPhotosAvenue(venueId) {
  console.log(venueId, 'venueId')
  const { photos,  isLoading, error } = useSelector(state => state.photos) || {};
  const dispatch = useDispatch();

  useEffect(() => {
    if (venueId && !isLoading && !error) dispatch(fetchPhotos(venueId));
  }, [dispatch, error, isLoading, venueId]);

  return [photos, isLoading, error];
}