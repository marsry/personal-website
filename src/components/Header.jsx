import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PrimaryButton from "./buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
// import TextButton from "./buttons/TextButton";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const logoOnClick = () => {
    navigate("/");
  };

  const contactMeOnClick = () => {
    navigate("/contact-me");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "rgba(20, 26, 31, 0.8)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginX: "50px",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={logoOnClick}
          >
            Logo
          </IconButton>
          {/* <div>
            <TextButton name="About me" color="light" />
            <TextButton name="Experience" color="light" />
            <TextButton name="Portfolio" color="light" />
          </div> */}
          <PrimaryButton
            name="Contact me"
            buttonColor="dblue"
            onClick={contactMeOnClick}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
