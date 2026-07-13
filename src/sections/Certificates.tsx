import { Box } from "@mui/material";
import oliveBg from "../assets/backgrounds/olive.jpg";

function Certificates() {
  return (
    <Box
      id="certificates"
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${oliveBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px auto",
        backgroundPosition: "top center",
      }}
    />
  );
}

export default Certificates;