import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { controlActions } from "../../store/controls-slice";

import classes from "./Checkbox.module.scss";

const VALUES = [
  "Все",
  "Без пересадок",
  "1 пересадка",
  "2 пересадки",
  "3 пересадки",
];

const CheckboxInput = () => {
  const controls = useSelector((state) => state.controls.ctrl);
  const dispatch = useDispatch();
  const handleClick = (idx) => {
    switch (idx) {
      case 0:
        dispatch(controlActions.all());
        break;
      case 1:
        dispatch(controlActions.zero());
        break;
      case 2:
        dispatch(controlActions.one());
        break;
      case 3:
        dispatch(controlActions.two());
        break;
      case 4:
        dispatch(controlActions.three());
        break;
      default:
        break;
    }
  };

  const inputComponentsArray = VALUES.map((input, index) => {
    return (
      <FormControlLabel
        key={index}
        className={classes.checkOption}
        control={
          <Checkbox
            size="small"
            checked={!index ? !controls.includes(false) : controls[index - 1]}
            onClick={() => handleClick(index)}
          />
        }
        label={<span className={classes.inputLabel}>{input}</span>}
      />
    );
  });

  return inputComponentsArray;
};

export default CheckboxInput;
