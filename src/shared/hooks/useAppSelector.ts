import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from 'app/providers/StoreProvider/types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
