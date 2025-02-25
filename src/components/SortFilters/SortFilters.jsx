import classes from "./SortFilters.module.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { sortActions } from "../../store/sort";

const SortFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.sort.filter);

  const sortCheapest = () => {
    dispatch(sortActions.cheap());
  };
  const sortFastest = () => {
    dispatch(sortActions.fast());
  };
  const sortOptimal = () => {
    dispatch(sortActions.optimal());
  };

  return (
    <ButtonGroup
      className={classes.buttonGroup}
      disableElevation
      fullWidth
      variant="outlined"
      aria-label="Фильтры для сортировки билетов"
    >
      <Button
        variant={filter === "cheap" ? "contained" : null}
        onClick={sortCheapest}
      >
        Самый дешёвый
      </Button>
      <Button
        variant={filter === "fast" ? "contained" : null}
        onClick={sortFastest}
      >
        Самый быстрый
      </Button>
      <Button
        variant={filter === "optimal" ? "contained" : null}
        style={{ flexGrow: 1 }}
        onClick={sortOptimal}
      >
        Оптимальный
      </Button>
    </ButtonGroup>
  );
};

export default SortFilters;
