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
      return {
        ...state,
        tickets: state.tickets.toSorted((a, b) => {
          return a.price - b.price;
        }),
      };
    },
    sortFast: (state) => {
      return {
        ...state,
        tickets: state.tickets.toSorted((a, b) => {
          return a.segments[0].duration - b.segments[0].duration;
        }),
      };
    },
    sortOptimal: (state) => {
      return {
        ...state,
        tickets: state.tickets.toSorted((a, b) => {
          // Логика: за каждую лишнюю минуту в полете турист теряет 15р. счастья под солнцем
          return (
            a.price +
            a.segments[0].duration * 15 -
            b.price -
            b.segments[0].duration * 15
          );
        }),
      };
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
            { cache: "reload" },
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
        clearInterval(timerID);
      }
    }, 600);
  };
};

export const ticketActions = ticketSlice.actions;

export default ticketSlice.reducer;
