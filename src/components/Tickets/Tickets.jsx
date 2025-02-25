import classes from "./Tickets.module.scss";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Tickets = () => {
  return (
    <Stack sx={{ marginBlock: "16px" }} spacing={2}>
      <Card component={"article"} elevation={3} className={classes.card}>
        <CardContent className={classes.card__content}>
          <Grid container spacing={2} className={classes.card__heading}>
            <Grid className={classes.card__title}>
              <Typography variant="h5" component="h5" color="primary">
                13 400 P
              </Typography>
            </Grid>
            <Grid>
              <img src="/s7_logo.png" alt="S7 Airlines" />
            </Grid>
          </Grid>
          <Grid container className={classes.card__info}>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                MOW - HKT
              </Typography>
              <Typography>10:45 – 08:00</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                В ПУТИ
              </Typography>
              <Typography>21ч 45м</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                2 ПЕРЕСАДКИ
              </Typography>
              <Typography>HKG - JNB</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.card__info}>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                MOW - HKT
              </Typography>
              <Typography>10:45 – 08:00</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                В ПУТИ
              </Typography>
              <Typography>21ч 45м</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                2 ПЕРЕСАДКИ
              </Typography>
              <Typography>HKG - JNB</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card component={"article"} elevation={3} className={classes.card}>
        <CardContent className={classes.card__content}>
          <Grid container spacing={2} className={classes.card__heading}>
            <Grid className={classes.card__title}>
              <Typography variant="h5" component="h5" color="primary">
                13 400 P
              </Typography>
            </Grid>
            <Grid>
              <img src="/s7_logo.png" alt="S7 Airlines" />
            </Grid>
          </Grid>
          <Grid container className={classes.card__info}>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                MOW - HKT
              </Typography>
              <Typography>10:45 – 08:00</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                В ПУТИ
              </Typography>
              <Typography>21ч 45м</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                2 ПЕРЕСАДКИ
              </Typography>
              <Typography>HKG - JNB</Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.card__info}>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                MOW - HKT
              </Typography>
              <Typography>10:45 – 08:00</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                В ПУТИ
              </Typography>
              <Typography>21ч 45м</Typography>
            </Grid>
            <Grid>
              <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                2 ПЕРЕСАДКИ
              </Typography>
              <Typography>HKG - JNB</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Tickets;
