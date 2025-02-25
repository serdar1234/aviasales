import { Provider } from "react-redux";
import "./App.css";
import Grid from "@mui/material/Grid2";

import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";
import configuredStore from "./store/index.js";

function App() {
  return (
    <>
      <Grid className="grid-container" container width="754px">
        <Provider store={configuredStore}>
          <Header />
          <ControlPanel />
          <InfoDisplay />
        </Provider>
      </Grid>
    </>
  );
}

export default App;
