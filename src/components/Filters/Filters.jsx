import classes from "./Filters.module.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const Filters = () => {
  return (
    <ButtonGroup
      className={classes.buttonGroup}
      disableElevation
      fullWidth
      variant="outlined"
      aria-label="Фильтры для сортировки билетов"
    >
      <Button variant="contained">Самый дешёвый</Button>
      <Button>Самый быстрый</Button>
      <Button style={{ flexGrow: 1 }}>Оптимальный</Button>
    </ButtonGroup>
  );
};

export default Filters;
