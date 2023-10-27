import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
