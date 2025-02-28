import { createSlice } from "@reduxjs/toolkit";

const initialStateSort = { filter: "cheap", shownTicketCount: 5 };

const sortSlice = createSlice({
  name: "sort",
  initialState: initialStateSort,
  reducers: {
    cheap: (state) => {
      return {
        ...state,
        filter: "cheap",
      };
    },
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
      shownTicketCount: state.shownTicketCount + 5,
    }),
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice.reducer;
