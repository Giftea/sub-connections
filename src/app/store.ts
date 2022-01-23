import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { fetchChainsApi } from '@/utils/data';

export const store = configureStore({
  reducer: {
    [fetchChainsApi.reducerPath]: fetchChainsApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
