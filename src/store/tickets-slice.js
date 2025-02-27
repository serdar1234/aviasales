import { createSlice } from "@reduxjs/toolkit";

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
    const { addTickets } = ticketSlice.actions;
    const timerID = setInterval(async () => {
      try {
        if (searchId) {
          const res = await fetch(
            `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
          );
          if (res.ok) {
            const data = await res.json();
            dispatch(addTickets(data));

            if (data.stop) {
              clearInterval(timerID);
              return;
            }
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }, 1000);
  };
};

export const ticketActions = ticketSlice.actions;

export default ticketSlice.reducer;
