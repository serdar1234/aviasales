import Grid from "@mui/material/Grid2";
import classes from "./Filters.module.scss";
// import Paper from "@mui/material/Paper";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
// import { blue } from "@mui/material/colors";

const Filters = () => {
  return (
    <Grid size={8} component={"nav"}>
      <ButtonGroup
        className={classes.heading}
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button>Самый дешёвый</Button>
        <Button>Самый быстрый</Button>
        <Button>Оптимальный</Button>
      </ButtonGroup>
    </Grid>
  );
};

export default Filters;
