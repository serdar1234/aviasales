import classes from "./ShowMoreButton.module.scss";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { sortActions } from "../../store/sort-slice";
import { bindActionCreators } from "redux";

const ShowMoreButton = () => {
  const dispatch = useDispatch();

  const showMore = bindActionCreators(sortActions.showMore, dispatch);

  return (
    <Button
      variant="contained"
      onClick={showMore}
      disableElevation
      className={classes.btn}
    >
      Показать еще 5 билетов!
    </Button>
  );
};

export default ShowMoreButton;
