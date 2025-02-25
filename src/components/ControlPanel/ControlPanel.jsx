import Grid from "@mui/material/Grid2";
import classes from "./ControlPanel.module.scss";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import CheckboxInput from "../Checkbox/Checkbox";
import Typography from "@mui/material/Typography";

const ControlPanel = () => {
  return (
    <Grid size={{ sm: 4 }} component={"aside"}>
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
};

export default ControlPanel;
