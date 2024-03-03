import { configureStore } from '@reduxjs/toolkit';
import { soccerApi } from '../api';

const store = configureStore({
  reducer: {
    [soccerApi.reducerPath]: soccerApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(soccerApi.middleware),
});
export default store;
