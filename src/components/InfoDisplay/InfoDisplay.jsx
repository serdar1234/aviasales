import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Filters from "../Filters";
import classes from "./InfoDisplay.module.scss";

const InfoDisplay = () => {
  return (
    <>
      <Grid size={{ sm: 8 }} component={"section"} className={classes.section}>
        <Filters />
        <Typography sx={{ border: "1px dashed red" }}>ticket</Typography>
        <Button variant="contained" fullWidth sx={{ height: "50px" }}>
          Показать еще 5 билетов!
        </Button>
      </Grid>
    </>
  );
};

export default InfoDisplay;
