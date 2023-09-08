import { Button } from "@mui/material";
import React from "react";

export default function TextButton(props) {
  return (
    <Button
      sx={{
        textTransform: "none",
        color: props.color === "white" ? "#ffffff" : "#0074E8",
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
