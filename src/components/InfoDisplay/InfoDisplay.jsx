// import classes from "./InfoDisplay.module.scss";
import Grid from "@mui/material/Grid2";
import Filters from "../Filters";

const InfoDisplay = () => {
  return (
    <Grid size={8} md={502} offset={4} component={"section"}>
      <Filters />
    </Grid>
  );
};

export default InfoDisplay;
