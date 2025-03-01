import { ticketActions } from "../store/tickets-slice";
import { controlActions } from "../store/controls-slice";

export function getSearchID(dispatch) {
  fetch("https://aviasales-test-api.kata.academy/search")
    .then((result) => result.json())
    .then((data) => dispatch(ticketActions.setSession(data.searchId)))
    .catch((err) => console.log(err));
}

export async function appendTickets(searchId, dispatch, timerID) {
  try {
    if (searchId) {
      const res = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
        { cache: "reload" },
      );
      if (res.ok) {
        let data = await res.json();
        dispatch(ticketActions.addTickets(data));

        if (data.stop) {
          clearInterval(timerID);
          return;
        }
      }
    }
  } catch {
    dispatch(controlActions.setError());
    clearInterval(timerID);
  }
}
