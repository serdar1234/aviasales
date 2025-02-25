import { configureStore } from "@reduxjs/toolkit";

import sortReducer from "./sort";
import controlsReducer from "./controls";

const store = configureStore({
  reducer: {
    sort: sortReducer,
    controls: controlsReducer,
  },
});

export default store;
