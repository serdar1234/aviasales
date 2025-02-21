import Grid from "@mui/material/Grid2";
import classes from "./ControlPanel.module.scss";
import Paper from "@mui/material/Paper";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const ControlPanel = () => {
  return (
    <Grid size={{ sm: 4 }} component={"aside"}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.heading} component={"h3"}>
          Количество пересадок
        </Typography>
        <FormGroup className={classes.form}>
          <FormControlLabel
            className={classes.checkOption}
            control={<Checkbox size="small" />}
            label={<span className={classes.inputLabel}>Все</span>}
          />
          <FormControlLabel
            className={classes.checkOption}
            control={<Checkbox size="small" />}
            label={<span className={classes.inputLabel}>Без пересадок</span>}
          />
          <FormControlLabel
            className={classes.checkOption}
            control={<Checkbox size="small" />}
            label={<span className={classes.inputLabel}>1 пересадка</span>}
          />
          <FormControlLabel
            className={classes.checkOption}
            control={<Checkbox size="small" />}
            label={<span className={classes.inputLabel}>2 пересадки</span>}
          />
          <FormControlLabel
            className={classes.checkOption}
            control={<Checkbox size="small" />}
            label={<span className={classes.inputLabel}>3 пересадки</span>}
          />
        </FormGroup>
      </Paper>
    </Grid>
  );
};

export default ControlPanel;
