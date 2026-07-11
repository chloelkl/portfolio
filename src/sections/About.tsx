import { Box } from "@mui/material";
import blueBg from "../assets/backgrounds/blue.jpg";

function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${blueBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px auto",
        backgroundPosition: "top center",
      }}
    />
  );
}

export default About;