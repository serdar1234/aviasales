import classes from "./Tickets.module.scss";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import {
  durationInHoursMinutes,
  showDeparturesTimes,
  transitsCount,
} from "../../utils/timeUtils";

const Tickets = () => {
  const shownTicketCount = useSelector((state) => state.sort.ticketsDisplayed);
  const ticketsArray = useSelector((state) => state.tickets.tickets);
  const visibleTickets = ticketsArray.slice(0, shownTicketCount);

  return (
    <Stack sx={{ marginBlock: "16px" }} spacing={2}>
      {visibleTickets.map(({ price, carrier, segments }) => {
        return (
          <Card
            key={Date.parse(segments[0].date)}
            component={"article"}
            elevation={3}
            className={classes.card}
          >
            <CardContent className={classes.card__content}>
              <Grid container spacing={2} className={classes.card__heading}>
                <Grid className={classes.card__title}>
                  <Typography variant="h5" component="h5" color="primary">
                    {price} P
                  </Typography>
                </Grid>
                <Grid>
                  <img
                    src={`https://pics.avs.io/110/36/${carrier}.png`}
                    alt={`Логотип авиалинии ${carrier}`}
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.card__info}>
                <Grid>
                  <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                    {segments[0].origin} - {segments[0].destination}
                  </Typography>
                  <Typography>
                    {showDeparturesTimes(
                      segments[0].date,
                      segments[0].duration,
                    )}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                    В ПУТИ
                  </Typography>
                  <Typography>
                    {durationInHoursMinutes(segments[0].duration)}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                    {transitsCount(segments[0].stops)}
                  </Typography>
                  <Typography>{segments[0].stops.join(" - ")}</Typography>
                </Grid>
              </Grid>
              <Grid container className={classes.card__info}>
                <Grid>
                  <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                    {segments[1].origin} - {segments[1].destination}
                  </Typography>
                  <Typography>
                    {showDeparturesTimes(
                      segments[1].date,
                      segments[1].duration,
                    )}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                    В ПУТИ
                  </Typography>
                  <Typography>
                    {durationInHoursMinutes(segments[1].duration)}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                    {transitsCount(segments[1].stops)}
                  </Typography>
                  <Typography>{segments[1].stops.join(" - ")}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Tickets;
