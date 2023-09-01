import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ContainedButton from "./ContainedButton";
import TextButton from "./TextButton";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#141A1F" }}>
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
          >
            Logo
          </IconButton>
          <div>
            <TextButton name="About me" color="light" />
            <TextButton name="Experience" color="light" />
            <TextButton name="Portfolio" color="light" />
          </div>
          <ContainedButton name="Contact Me" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
