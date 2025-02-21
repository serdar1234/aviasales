import Grid from "@mui/material/Grid2";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Grid
      size={12}
      height={{ xs: "92px", md: "160px" }}
      className={classes.header}
      component={"header"}
    >
      <img alt="Aviasales logo" src="/logo.png" className={classes.logo} />
    </Grid>
  );
};

export default Header;
