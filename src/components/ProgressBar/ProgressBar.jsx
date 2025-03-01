import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";

export default function ProgressBar() {
  const { loadingError } = useSelector((state) => state.control);
  const progress = useSelector((state) => {
    return state.tickets.tickets.length < 10000
      ? Math.round(state.tickets.tickets.length / 100)
      : 99;
  });

  return (
    <Box sx={{ paddingTop: 2, width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        color={loadingError ? "error" : "primary"}
      />
      {loadingError && (
        <Alert severity="error" variant="outlined" sx={{ marginTop: "16px" }}>
          Подключение прервано. Пожалуйста, перезагрузите страницу
        </Alert>
      )}
    </Box>
  );
}
