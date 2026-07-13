import { Box, Typography } from "@mui/material";
import selectedBg from "../assets/navbar/selected.png";

type NavItemProps = {
  label: string;
  section: string;
  active: boolean;
};

function NavItem({
  label,
  section,
  active
}: NavItemProps) {
  const handleClick = () => {

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
        width: 170,
        py: 3,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,

          backgroundImage: `url(${selectedBg})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          opacity: active ? 1 : 0,
          transition: "opacity 0.5s ease",

          zIndex: 0,
        }}
      />

      {/* Text */}
      <Typography
        sx={{
          position: "relative",
          zIndex: 1,

          color: active ? "#f2e8d5" : "#5d4222",
          transition: "color 0.2s ease",

          fontSize: "1rem",
          fontWeight: 600,
          textAlign: "center",

          "&:hover": {
            color: active ? "#f2e8d5" : "#8d693d",
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default NavItem;