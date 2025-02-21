import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles";
import aviaSalesTheme from "./utils/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={aviaSalesTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
