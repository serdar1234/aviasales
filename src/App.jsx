import "./App.css";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import Header from "./components/Header";
import ControlPanel from "./components/ControlPanel";
import Filters from "./components/Filters";

function App() {
  return (
    <>
      <Grid className="grid-container" container width="754px">
        <Header />
        <ControlPanel />
        <Filters />
        <Grid size={8} md={502} offset={4}>
          <Typography sx={{ border: "1px dashed red" }}>ticket</Typography>
        </Grid>
        <Grid size={8} md={502} offset={4}>
          <Typography sx={{ border: "1px solid blue" }}>
            show more button
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
