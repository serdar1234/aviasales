import { createSlice } from "@reduxjs/toolkit";
import { appendTickets } from "../utils/fetchAPI";

const initialStateSort = { searchId: "", tickets: [], stop: false };

const ticketSlice = createSlice({
  name: "tickets",
  initialState: initialStateSort,
  reducers: {
    setSession: (state, action) => {
      state.searchId = action.payload;
    },
    addTickets: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload.tickets];
      state.stop = action.payload.stop;
    },
  },
});

export const getTickets = (searchId) => {
  return async (dispatch) => {
    const timerID = setInterval(
      () => appendTickets(searchId, dispatch, timerID),
      600,
    );
  };
};

export const ticketActions = ticketSlice.actions;

export default ticketSlice.reducer;
