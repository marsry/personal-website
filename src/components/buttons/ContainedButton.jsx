import { Button } from "@mui/material";
import React from "react";

export default function ContainedButton(props) {
  return (
    <Button
      variant="outlined"
      sx={{
        backgroundColor: "#182631",
        textTransform: "none",
        borderRadius: "10px",
        border: "1px #0074E8 solid",
        color: "#ffffff",
      }}
    >
      {props.name}
    </Button>
  );
}
