import React from "react";
import { Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PrimaryButton from "../components/buttons/PrimaryButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { TypeAnimation } from "react-type-animation";

export default function Contact() {
  const IconButtonStyle = {
    fontSize: "48px",
    color: "#FFFFFF",
    "&:hover": {
      color: "#0074E8",
    },
  };

  const ContactFormTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      overflow: "hidden",
      borderRadius: "10px",
      backgroundColor: "#141A1F",
      border: "1px solid #7388A4",
      color: "#FFFFFF",
      "&.Mui-focused": {
        backgroundColor: "#141A1F",
        border: "2px solid #0074E8",
        color: "white",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#7388A4",
    },
  }));

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid
        container
        paddingX="250px"
        alignItems="center"
        justifyContent="center"
      >
        <Grid xs={12} sm={6}>
          <TypeAnimation
            sequence={["", 1000, "Contact", 500, "Contact me.", 10000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "64px",
              fontWeight: 600,
              fontFamily: "Roboto",
            }}
          />
          <Typography fontSize={24} align="left" sx={{ color: "#7388A4" }}>
            Feel free to reach out to me <br />
            through social media or email.
          </Typography>
          <Stack direction="row" sx={{ marginTop: "20px" }}>
            <IconButton aria-label="email">
              <EmailRoundedIcon sx={IconButtonStyle} />
            </IconButton>
            <IconButton aria-label="facebook">
              <FacebookRoundedIcon sx={IconButtonStyle} />
            </IconButton>
            <IconButton aria-label="phone">
              <LocalPhoneRoundedIcon sx={IconButtonStyle} />
            </IconButton>
          </Stack>
        </Grid>
        <Grid xs={12} sm={6}>
          <Stack
            spacing={2}
            direction="column"
            sx={{
              border: "1px solid #7388A4",
              borderRadius: "10px",
              backgroundColor: "rgba(21,32,41,0.9)",
              padding: "50px",
            }}
          >
            <ContactFormTextField label="Name" id="name" variant="filled" />
            <ContactFormTextField label="Email" id="email" variant="filled" />
            <ContactFormTextField
              label="Message"
              id="message"
              variant="filled"
              multiline
              rows={4}
            />

            <div style={{ display: "flex", justifyContent: "right" }}>
              <PrimaryButton
                name="Send email"
                buttonColor="blue"
                onClick={() => {}}
              />
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
