import Grid from "@mui/material/Grid2";
import classes from "./TransitFilters.module.scss";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";

import CheckboxInput from "../Checkbox";
import { memo } from "react";

const TransitFilters = memo(function TransitFilters() {
  return (
    <Grid size={{ sm: 3.7 }} component={"aside"}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.heading} component={"h3"}>
          Количество пересадок
        </Typography>
        <FormGroup className={classes.form}>
          <CheckboxInput />
        </FormGroup>
      </Paper>
    </Grid>
  );
});

export default TransitFilters;
