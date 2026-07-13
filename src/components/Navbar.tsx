import { Box, Stack, Typography } from "@mui/material";
import paperBg from "../assets/navbar/paper.png";

function Navbar() {
    return (
        <Box
            sx={{
                width: "80%",
                maxWidth: 1100,
                height: 80,

                mx: "auto",
                mt: -25,

                backgroundImage: `url(${paperBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                display: "flex",
                alignItems: "center",
                flexDirection: "row",

                px: 6,

                filter: "drop-shadow(0 6px 12px rgba(0,0,0,.25))",

                position: "sticky",
                top: 20,
                zIndex: 100,
            }}
        >
            <Stack

                sx={{
                    width: "100%",
                    direction: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                }}
            >
                {/* Left navigation */}
                <Stack direction="row" spacing={6}>
                    <Typography
                        sx={{
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            color: "#5d4222",
                            transition: ".2s",

                            "&:hover": {
                                color: "#000",
                            },
                        }}
                    >
                        Projects
                    </Typography>

                    <Typography
                        sx={{
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            color: "#5d4222",

                            "&:hover": {
                                color: "#000",
                            },
                        }}
                    >
                        Certificates
                    </Typography>

                    <Typography
                        sx={{
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            color: "#5d4222",

                            "&:hover": {
                                color: "#000",
                            },
                        }}
                    >
                        Connect
                    </Typography>
                </Stack>

                {/* Right */}
                <Typography
                    sx={{
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        color: "#5d4222",

                        "&:hover": {
                            color: "#000",
                        },
                    }}
                >
                    Search
                </Typography>
            </Stack>
        </Box>
    );
}

export default Navbar;