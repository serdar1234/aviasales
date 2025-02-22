import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const aviaSalesTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750,
      lg: 950,
      xl: 1200,
      xxl: 1500,
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', "sans-serif"].join(","),
  },
});

export default aviaSalesTheme;
