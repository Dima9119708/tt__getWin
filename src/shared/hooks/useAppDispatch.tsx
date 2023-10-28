import { useDispatch } from 'react-redux';

import { AppDispatch } from 'app/providers/StoreProvider/types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
