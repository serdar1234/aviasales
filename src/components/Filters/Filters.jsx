import classes from "./Filters.module.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Filters = () => {
  return (
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
  );
};

export default Filters;
