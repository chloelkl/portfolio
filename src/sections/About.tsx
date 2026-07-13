import { Box, Typography, Grid } from "@mui/material";

import blueBg from "../assets/backgrounds/blue.jpg";

import doubleFrame from "../assets/frames/doubleframe.png";
import myself1 from "../assets/about/myself1.png";
import myself2 from "../assets/about/myself2.jpg";

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

        display: "flex",
        justifyContent: "space-around",
        pb: 30

      }}
    >
      <Grid container sx={{
        alignItems: "center",
        mx: 5
      }}>
        {/* Left / Top */}
        <Grid size={{ md: 12, lg: 4 }} sx={{ px: 5 }}>
          <Typography variant="h3">
            Hi, I'm Chloe.
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus purus diam, dignissim rhoncus erat varius id.
          </Typography>
        </Grid>
        <Grid
          size={{ md: 12, lg: 4 }}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ><Box
          sx={{
            position: "relative",
            width: 500,
            mx: "auto",
            my: "auto",
            py: 6,
          }}
        >
            {/* Left photo TO UPDATE */}
            <Box
              component="img"
              src={myself1}
              alt="Myself"
              sx={{
                position: "absolute",
                left: "3.6%",
                bottom: "18%",
                width: "45%",
                height: "57%",
                objectFit: "cover",
                transform: "rotate(3deg)",
                zIndex: 1,
              }}
            />

            {/* Right photo */}
            <Box
              component="img"
              src={myself2}
              alt="Myself"
              sx={{
                position: "absolute",
                right: "4%",
                bottom: "20%",
                width: "43%",
                height: "59%",
                objectFit: "cover",
                transform: "rotate(-2deg)",
                zIndex: 1,
              }}
            />

            {/* Frame */}
            <Box
              component="img"
              src={doubleFrame}
              alt="Vintage Frame"
              sx={{
                position: "relative",
                width: "100%",
                display: "block",
                zIndex: 2,
                pointerEvents: "none",
                filter: "drop-shadow(0px 10px 18px rgba(0,0,0,0.35))"
              }}
            />
          </Box></Grid>


        <Grid size={{ md: 12, lg: 4 }} sx={{ px: 5 }}>
          <Typography variant="h5">
            Computer Science Undergraduate
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus purus diam, dignissim rhoncus erat varius id.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;