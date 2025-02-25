import { configureStore } from "@reduxjs/toolkit";

import sortReducer from "./sort";

const store = configureStore({
  reducer: {
    sort: sortReducer,
  },
});

export default store;
