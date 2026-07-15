import { Box, Grid, Typography } from "@mui/material";

import whiteBg from "../assets/backgrounds/white.jpg";

import projects from "../data/projects.json";

import Project from "../components/Project";

// Import every frame
const frames = import.meta.glob(
  "../assets/frames/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

// Import every thumbnail
const thumbnails = import.meta.glob(
  "../assets/projects/*/thumbnail.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;

function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${whiteBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px auto",
        backgroundPosition: "top center",
        marginTop: 15,
      }}
    >


      <Grid container sx={{ justifyContent: "center", pt: 12, "maxWidth": 1100, mx: "auto" }} spacing={4}>
        {projects.map((project) => {
          const frameSrc =
            frames[`../assets/frames/${project.id}.png`];

          const thumbnailSrc =
            thumbnails[
            `../assets/projects/${project.id}/thumbnail.png`
            ];

          return (
            <Grid key={project.id} size={project.gridSize}>
              <Project
                project={project}
                frameSrc={frameSrc}
                thumbnailSrc={thumbnailSrc}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Projects;