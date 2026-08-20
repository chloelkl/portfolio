import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

import whiteBg from "../assets/backgrounds/white.jpg";
import posts from "../data/linkedin.json";

function LinkedIn() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    setCurrentIndex((prev) =>
      prev === posts.length - 1 ? 0 : prev + 1
    );
  };

  const previousPost = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? posts.length - 1 : prev - 1
    );
  };

  return (
    <Box
      id="linkedin"
      component="section"
      sx={{
        minHeight: "100vh",

        backgroundImage: `url(${whiteBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "400px auto",
        backgroundPosition: "top center",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        py: 12,
      }}
    >
    

      {/* Carousel */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {/* Previous */}

        <IconButton
          onClick={previousPost}
          sx={{
            width: 50,
            height: 50,

            color: "#5d4222",

            backgroundColor:
              "rgba(255,255,255,0.6)",

            boxShadow:
              "0 4px 10px rgba(0,0,0,0.15)",

            "&:hover": {
              backgroundColor:
                "rgba(255,255,255,0.9)",
            },
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>

        {/* LinkedIn post */}

        <Box
          sx={{
            width: 504,
            height: 628,

            backgroundColor: "#fff",

            overflow: "hidden",

            boxShadow:
              "0 10px 25px rgba(0,0,0,0.25)",

            borderRadius: 1,

            transition:
              "transform 0.3s ease",

            "&:hover": {
              transform:
                "translateY(-4px)",
            },
          }}
        >
          <iframe
            src={posts[currentIndex]}
            height="628"
            width="504"
            frameBorder="0"
            allowFullScreen
            title={`LinkedIn post ${currentIndex + 1}`}
            style={{
              display: "block",
              border: "none",
            }}
          />
        </Box>

        {/* Next */}

        <IconButton
          onClick={nextPost}
          sx={{
            width: 50,
            height: 50,

            color: "#5d4222",

            backgroundColor:
              "rgba(255,255,255,0.6)",

            boxShadow:
              "0 4px 10px rgba(0,0,0,0.15)",

            "&:hover": {
              backgroundColor:
                "rgba(255,255,255,0.9)",
            },
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>
      </Box>

      {/* Dots */}

      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          mt: 4,
        }}
      >
        {posts.map((_, index) => (
          <Box
            key={index}
            onClick={() =>
              setCurrentIndex(index)
            }
            sx={{
              width:
                index === currentIndex
                  ? 28
                  : 10,

              height: 10,

              borderRadius: 5,

              cursor: "pointer",

              backgroundColor:
                index === currentIndex
                  ? "#5d4222"
                  : "#c8b99f",

              transition:
                "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default LinkedIn;