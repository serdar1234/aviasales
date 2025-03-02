import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";

const NoTicketsMessage = ({ filteredTickets = null, children }) => {
  if (filteredTickets === null) {
    return (
      <Alert variant="outlined" severity="info">
        Рейсов, подходящих под заданные фильтры, не найдено
      </Alert>
    );
  }

  return children;
};

NoTicketsMessage.propTypes = {
  filteredTickets: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.oneOf([null]),
  ]),
  children: PropTypes.node,
};

export default NoTicketsMessage;
