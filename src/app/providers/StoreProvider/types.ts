import { AxiosInstance } from 'axios';
import { store } from 'app/providers/StoreProvider/store';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export interface ThunkApiConfig<RejectValue> {
    state: RootState,
    extra: {
        api: AxiosInstance
    },
    rejectValue: RejectValue
}
