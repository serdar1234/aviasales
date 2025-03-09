import classes from "./SortFilters.module.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { sortActions } from "../../store/sort-slice";
import { bindActionCreators } from "redux";

const SortFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.sort.filter);

  const { cheap, fast, optimal } = bindActionCreators(sortActions, dispatch);

  return (
    <ButtonGroup
      className={classes.buttonGroup}
      disableElevation
      fullWidth
      variant="outlined"
      aria-label="Фильтры для сортировки билетов"
    >
      <Button variant={filter === "cheap" ? "contained" : null} onClick={cheap}>
        Самый дешёвый
      </Button>
      <Button variant={filter === "fast" ? "contained" : null} onClick={fast}>
        Самый быстрый
      </Button>
      <Button
        variant={filter === "optimal" ? "contained" : null}
        style={{ flexGrow: 1 }}
        onClick={optimal}
      >
        Оптимальный
      </Button>
    </ButtonGroup>
  );
};

export default SortFilters;
