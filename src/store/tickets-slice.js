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
    sortCheap: (state) => {
      state.tickets = state.tickets.toSorted((a, b) => {
        return a.price - b.price;
      });
    },
    sortFast: (state) => {
      state.tickets = state.tickets.toSorted((a, b) => {
        return a.segments[0].duration - b.segments[0].duration;
      });
    },
    sortOptimal: (state) => {
      state.tickets = state.tickets.toSorted((a, b) => {
        const priceDifference = a.price - b.price;
        if (priceDifference === 0) {
          return a.segments[0].duration - b.segments[0].duration;
        } else {
          return priceDifference;
        }
      });
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
            let data = await res.json();
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
    }, 600);
  };
};

export const ticketActions = ticketSlice.actions;

export default ticketSlice.reducer;
