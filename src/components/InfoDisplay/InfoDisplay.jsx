import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import SortFilters from "../SortFilters";
import classes from "./InfoDisplay.module.scss";
import Tickets from "../Tickets";
import ProgressBar from "../ProgressBar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const InfoDisplay = () => {
  const [isLoading, setIsLoading] = useState(true);
  const stop = useSelector((state) => state.tickets.stop);

  useEffect(() => {
    if (stop) setIsLoading(false);
  }, [stop]);

  return (
    <>
      <Grid
        size={{ sm: 7.8 }}
        rowSpacing={2}
        component={"section"}
        className={classes.section}
      >
        <SortFilters />
        {isLoading && <ProgressBar />}
        <Tickets />
        <Button
          variant="contained"
          disableElevation
          fullWidth
          sx={{ height: "50px" }}
        >
          Показать еще 5 билетов!
        </Button>
      </Grid>
    </>
  );
};

export default InfoDisplay;
