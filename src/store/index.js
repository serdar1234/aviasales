import { configureStore } from "@reduxjs/toolkit";

import sortReducer from "./sort-slice";
import controlsReducer from "./controls-slice";
import ticketSliceReducer from "./tickets-slice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
    controls: controlsReducer,
    tickets: ticketSliceReducer,
  },
});

export default store;
