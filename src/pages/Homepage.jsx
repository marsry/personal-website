import React from "react";
import headerImage from "../assets/header-pic.webp";
import { Grid, Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function Homepage() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          height: "100vh",
          width: "90vw",
          backgroundImage: `url(${headerImage})`,
          backgroundPosition: "center",
          marginTop: "20px",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography fontSize={64} fontWeight={600}>
            Designer
          </Typography>
          <Typography fontSize={24} sx={{ color: "#7388A4" }}>
            UI/UX designer
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography fontSize={64} fontWeight={600}>
            Developer
          </Typography>
          <Typography fontSize={24} sx={{ color: "#7388A4" }}>
            Frontend developer
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          border: "1px solid #7388A4",
          paddingX: "150px",
          paddingY: "50px",
          marginBottom: "20px",
          backgroundColor: "#152029",
          //   borderRadius: "10px",
        }}
      >
        <Grid item xs={12} sm={5} align="left">
          <TypeAnimation
            sequence={["", 1000, "Hello!", 500, "Hello! I'm Marsry!", 10000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "48px",
              fontWeight: 600,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            fontSize={24}
            fontWeight={500}
            align="left"
            sx={{ color: "#0074E8" }}
          >
            About me
          </Typography>
          <Typography fontSize={18} align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
