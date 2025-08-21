import { configureStore } from '@reduxjs/toolkit';
import { monstersApi } from '~/features/monsters/api/monsterApi';

const store = configureStore({
    reducer: {
    [monstersApi.reducerPath]: monstersApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(monstersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export default store
