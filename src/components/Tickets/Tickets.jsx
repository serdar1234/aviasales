import classes from "./Tickets.module.scss";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Tickets = () => {
  return (
    <Stack sx={{ border: "1px dashed red", marginBlock: "16px" }} spacing={2}>
      <Card component={"article"} className={classes.card}>
        <CardContent>
          <Grid container spacing={2} className={classes.card__heading}>
            <Grid className={classes.card__title}>
              <Typography variant="h5" component="h5">
                13 400 P
              </Typography>
            </Grid>
            <Grid>
              <img src="/s7_logo.png" alt="S7 Airlines" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                Word of the Day
              </Typography>
            </Grid>
            <Grid></Grid>
            <Grid></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid></Grid>
            <Grid></Grid>
            <Grid></Grid>
          </Grid>

          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
      <Paper>some text inside a paper</Paper>
      <Paper>some text inside a paper</Paper>
    </Stack>
  );
};

export default Tickets;
