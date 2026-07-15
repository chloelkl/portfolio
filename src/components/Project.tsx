import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { ProjectProps } from "../types/Project";

function Project({
  project,
  frameSrc,
  thumbnailSrc,
  onClick,
}: ProjectProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: "100%",
        cursor: "pointer",
        mx: "auto",
        "&:hover": {
          transform: `rotate(7deg)`
        }
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        {/* Thumbnail */}

        <Box
          component="img"
          src={thumbnailSrc}
          alt={project.title}
          sx={{
            position: "absolute",

            left: project.layout.left,
            top: project.layout.top,

            width: project.layout.width,
            height: project.layout.height,

            objectFit: "cover",

            borderRadius:
              project.layout.borderRadius,

            zIndex: 1,
          }}
        />

        {/* Frame */}

        <Box
          component="img"
          src={frameSrc}
          alt={project.title}
          sx={{
            width: "100%",
            display: "block",

            position: "relative",

            zIndex: 2,

            filter:
              "drop-shadow(0 8px 16px rgba(0,0,0,.35))",
          }}
        />
      </Box>

      {/* Nameplate */}

      <Typography
        sx={{
          mt: 2,

          textAlign: "center",

          fontWeight: 600,
        }}
      >
        {project.title}
      </Typography>

      <Typography
        sx={{
          textAlign: "center",

          color: "#666",

          fontSize: ".9rem",
        }}
      >
        {project.year}
      </Typography>
    </Box>
  );
}

export default Project;