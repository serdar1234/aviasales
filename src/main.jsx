import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource-variable/open-sans";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import aviaSalesTheme from "./utils/muiTheme.js";
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={aviaSalesTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
);
