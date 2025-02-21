import "./App.css";
import Grid from "@mui/material/Grid2";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";

function App() {
  return (
    <>
      <Grid className="grid-container" container width="754px">
        <Header />
        <ControlPanel />
        <InfoDisplay />
      </Grid>
    </>
  );
}

export default App;
