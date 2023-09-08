import React from "react";
import { Button } from "@mui/material";

export default function PrimaryButton(props) {
  return (
    <Button
      variant="outlined"
      onClick={props.onClick}
      sx={{
        backgroundColor: props.buttonColor === "dblue" ? "#0E2032" : "#0074E8",
        textTransform: "none",
        borderRadius: "15px",
        border: "1px #0074E8 solid",
        color: "#ffffff",
      }}
    >
      {props.name}
    </Button>
  );
}
