import { Box } from "@mui/material";
import whiteBg from "../assets/backgrounds/white.jpg";

function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${whiteBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px auto",
        backgroundPosition: "top center",
        marginTop: 15,
      }}
    />
  );
}

export default Projects;