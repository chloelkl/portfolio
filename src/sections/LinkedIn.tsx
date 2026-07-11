import { Box } from "@mui/material";
import whiteBg from "../assets/backgrounds/white.jpg";

function LinkedIn() {
  return (
    <Box
      id="linkedin"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${whiteBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px auto",
        backgroundPosition: "top center",
      }}
    />
  );
}

export default LinkedIn;