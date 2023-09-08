import React from "react";
import headerImage from "../assets/header-pic.webp";
import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { TypeAnimation } from "react-type-animation";
import experienceContents from "../contents/experience.json";

export default function Homepage() {
  return (
    <div>
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
            backgroundPositionX: "center",
            backgroundPositionY: "bottom",
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography fontSize={64} fontWeight={600} align="center">
              Designer
            </Typography>
            <Typography fontSize={24} sx={{ color: "#7388A4" }} align="center">
              UI/UX designer
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography fontSize={64} fontWeight={600} align="center">
              Developer
            </Typography>
            <Typography fontSize={24} sx={{ color: "#7388A4" }} align="center">
              Frontend developer
            </Typography>
          </Grid>
        </Grid>
      </Stack>
      <Grid
        container
        sx={{
          border: "2px solid #0074E8",
          backgroundColor: "#003266",
          paddingX: "150px",
          paddingY: "50px",
          boxShadow: "0 0 20px #003266",
          //   borderRadius: "10px",
        }}
      >
        <Grid item xs={12} sm={5} align="left">
          <TypeAnimation
            sequence={["", 1000, "Hello,", 500, "Hello, I'm Marsry!", 10000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "48px",
              fontWeight: 600,
              fontFamily: "Roboto",
              fontColor: "#7388A4",
            }}
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Typography
            fontSize={24}
            fontWeight={500}
            align="left"
            sx={{ color: "#7388A4" }}
          >
            About me
          </Typography>
          <Typography fontSize={16} align="left">
            I am Marsry Jan S. Sevilla, a software engineer from Iloilo City,
            Philippines. I'm driven by a deep passion for frontend development
            and UI/UX design, characterized by my meticulous attention to
            detail, and totally committed to making sure users have a seamless
            experience. My proficiency in both coding and design essentials
            enables me to seamlessly integrate creativity and technical
            excellence into every project I undertake.
          </Typography>
        </Grid>
      </Grid>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          paddingX: "150px",
          paddingY: "100px",
          backgroundColor: "#141A1F",
        }}
      >
        <Typography
          fontSize={24}
          fontWeight={500}
          sx={{ color: "#7388A4", marginBottom: "20px" }}
        >
          Experience
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          {experienceContents.map((experienceContent) => {
            return (
              <Grid item xs={12} sm={4}>
                <Card
                  sx={{
                    minHeight: 200,
                    backgroundColor: "#0E2032",
                    border: "1px solid #7388A4",
                    borderRadius: "15px",
                    padding: "15px",
                  }}
                >
                  <CardContent>
                    <Typography fontSize={14} color="#7388A4">
                      {experienceContent.duration}
                    </Typography>
                    <Typography fontSize={16} color="#FFFFFF">
                      {experienceContent.company}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} fontSize={14} color="#7388A4">
                      {experienceContent.position}
                    </Typography>
                    <Typography fontSize={14} color="#9AA9BC">
                      {experienceContent.workDescription}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Button
          endIcon={<ArrowRightIcon />}
          sx={{
            display: "flex",
            justifyContent: "right",
            textTransform: "none",
          }}
        >
          View Full Resume
        </Button>
      </Stack>
    </div>
  );
}
