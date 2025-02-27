import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource-variable/open-sans";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import aviaSalesTheme from "./utils/theme.js";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={aviaSalesTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
