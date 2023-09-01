import { Button } from "@mui/material";
import React from "react";

export default function TextButton(props) {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: props.color === "light" ? "#ffffff" : "#0000000",
        fontWeight: 400,
        marginX: "20px",
        "&:hover": {
          color: "#7388A4",
        },
      }}
    >
      {props.name}
    </Button>
  );
}
