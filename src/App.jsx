import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Grid from "@mui/material/Grid2";

import Header from "./components/Header";
import TransitFilters from "./components/TransitFilters";
import InfoDisplay from "./components/InfoDisplay";
import { getTickets } from "./store/tickets-slice";
import { getSearchID } from "./utils/fetchAPI";

function App() {
  const dispatch = useDispatch();
  const { searchId } = useSelector((state) => state.tickets);

  useEffect(() => {
    getSearchID(dispatch);
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
        <TransitFilters />
        <InfoDisplay />
      </Grid>
    </>
  );
}

export default App;
