import { createSlice } from "@reduxjs/toolkit";

const initialStateSort = { filter: "cheap", ticketsDisplayed: 5 };

const sortSlice = createSlice({
  name: "sort",
  initialState: initialStateSort,
  reducers: {
    cheap: (state) => ({
      ...state,
      filter: "cheap",
    }),
    fast: (state) => ({
      ...state,
      filter: "fast",
    }),
    optimal: (state) => ({
      ...state,
      filter: "optimal",
    }),
    showMore: (state) => ({
      ...state,
      ticketsDisplayed: state.ticketsDisplayed + 5,
    }),
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice.reducer;
