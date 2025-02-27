import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Grid from "@mui/material/Grid2";

import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";
import { ticketActions, getTickets } from "./store/tickets-slice";

function App() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.tickets.searchId);

  useEffect(() => {
    fetch("https://aviasales-test-api.kata.academy/search")
      .then((result) => result.json())
      .then((data) => dispatch(ticketActions.setSession(data.searchId)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  useEffect(() => {
    if (searchId) dispatch(getTickets(searchId));
  }, [dispatch, searchId]);

  return (
    <>
      <Grid
        className="grid-container"
        container
        width="754px"
        rowSpacing={1}
        columnSpacing={1}
      >
        <Header />
        <ControlPanel />
        <InfoDisplay />
      </Grid>
    </>
  );
}

export default App;
