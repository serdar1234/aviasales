import { createSlice } from "@reduxjs/toolkit";

const initialStateSort = { filter: "cheap" };

const sortSlice = createSlice({
  name: "sort",
  initialState: initialStateSort,
  reducers: {
    cheap: () => ({ filter: "cheap" }),
    fast: () => ({ filter: "fast" }),
    optimal: () => ({ filter: "optimal" }),
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice.reducer;
