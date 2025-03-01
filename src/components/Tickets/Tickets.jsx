import classes from "./Tickets.module.scss";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";

import {
  durationInHoursMinutes,
  showDeparturesTimes,
  transitsCount,
} from "../../utils/timeUtils";
import filterTicketsByTransits from "../../utils/filterByTransits";

const Tickets = () => {
  const shownTicketCount = useSelector((state) => state.sort.shownTicketCount);
  const ticketsArray = useSelector((state) => state.tickets.tickets);
  const checkedOptions = useSelector((state) => state.control.ctrl);

  const filteredTickets = filterTicketsByTransits(ticketsArray, checkedOptions);
  const visibleTickets =
    filteredTickets !== null ? (
      filteredTickets.slice(0, shownTicketCount)
    ) : (
      <Alert variant="outlined" severity="info">
        Рейсов, подходящих под заданные фильтры, не найдено
      </Alert>
    );

  return (
    <Stack sx={{ marginBlock: "16px" }} spacing={2}>
      {filteredTickets === null && visibleTickets}
      {filteredTickets !== null &&
        visibleTickets.map(({ price, carrier, segments }) => {
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
                {segments.map((line, index) => {
                  return (
                    <Grid key={index} container className={classes.card__info}>
                      <Grid>
                        <Typography
                          sx={{ color: "text.secondary", fontSize: 14 }}
                        >
                          {line.origin} - {line.destination}
                        </Typography>
                        <Typography>
                          {showDeparturesTimes(line.date, line.duration)}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography
                          sx={{ color: "text.secondary", fontSize: 14 }}
                        >
                          В ПУТИ
                        </Typography>
                        <Typography>
                          {durationInHoursMinutes(line.duration)}
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography
                          sx={{ color: "text.secondary", fontSize: 14 }}
                        >
                          {transitsCount(line.stops)}
                        </Typography>
                        <Typography>{line.stops.join(" - ")}</Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
    </Stack>
  );
};

export default Tickets;
