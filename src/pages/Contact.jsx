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
      borderRadius: "15px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #7388A4",
      color: "#152029",
      "&.Mui-focused": {
        backgroundColor: "#FFFFFF",
        border: "2px solid #0074E8",
        color: "#152029",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#7388A4",
      fontSize: "14px",
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
            sequence={["", 200, "Contact me.", 10000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "64px",
              fontWeight: 600,
              fontFamily: "Roboto",
              color: "#0074E8",
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
            spacing={3}
            direction="column"
            sx={{
              border: "1px solid #7388A4",
              borderRadius: "15px",
              backgroundColor: "#0E2032",
              padding: "40px",
            }}
          >
            <ContactFormTextField label="Name" id="name" variant="filled" />
            <ContactFormTextField label="Email" id="email" variant="filled" />
            <ContactFormTextField
              label="Message"
              id="message"
              variant="filled"
              multiline
              rows={3}
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
