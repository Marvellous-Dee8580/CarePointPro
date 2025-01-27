// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import healthStatsReducer from './slices/healthStatsSlices';

// const store = configureStore({
//   reducer: {
//     healthStats: healthStatsReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import healthStatsReducer from './slices/healthStatsSlices';

const store = configureStore({
  reducer: {
    healthStats: healthStatsReducer,
  },
  // No need to explicitly add redux-thunk; it's included by default
});

export default store;